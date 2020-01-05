/**
 * Initialization of Yandex maps using the standard API method
 * @mapInit
 * @param {string} id - id DOM element.
 * @param {number} latitude - The title of the book.
 * @param {number} longitude - The author of the book.
 * @param {number} defaultZoom - The author of the book.
 */

import {
    moscowPlacemark,
    kazanPlacemark,
    ulianovskPlacemark,
} from 'constants/configuration.js';

import { createPlacemark } from 'utils/offices-init.js';

const mapInit = (id, latitude, longitude, defaultZoom) => {
    ymaps.ready(init);
    function init() {
        const myMap = new ymaps.Map(id, {
            center: [latitude, longitude],
            zoom: defaultZoom,
            controls: [],
        });

        myMap.geoObjects.add(createPlacemark(moscowPlacemark));
        myMap.geoObjects.add(createPlacemark(kazanPlacemark));
        myMap.geoObjects.add(createPlacemark(ulianovskPlacemark));

        // Создание макета для поискового контрола.
        var MySearchControlLayout = ymaps.templateLayoutFactory.createClass(
            '<form class="form-search">' +
                '<div class="input-append">' +
                    '<input type="text" class="span4 search-query" data-provide="typeahead">' +
                    '<button type="submit" class="btn[if data.theme] btn-$[data.theme][endif]">Поиск</button>' +
                '</div>' +
            '</form>',
            {
                build: function () {
                    MySearchControlLayout.superclass.build.call(this);
                    this.onSubmit = ymaps.util.bind(this.onSubmit, this);
                    this.onFieldChange = ymaps.util.bind(this.onFieldChange, this);
                    this.dataSource = ymaps.util.bind(this.dataSource, this);
                    this.form = $('.form-search')
                        .on('submit', this.onSubmit);
                    this.field = $('.search-query')
                        .on('change', this.onFieldChange)
                        .typeahead({ source: this.dataSource, items: 5, minLength: 3 });
                    this.getData().state.events.add('change', this.onStateChange, this);
                    // this.getData().control.events.add('resultshow', this.onShowResult, this);
                },
                clear: function () {
                    // this.getData().control.events.remove('resultshow', this.onShowResult, this);
                    this.getData().state.events.remove('change', this.onStateChange, this);
                    this.field.off('**');
                    this.form.off('submit', this.onSubmit);
                    MySearchControlLayout.superclass.clear.call(this);
                },
                onFieldChange: function () {
                    if (this.field.is(':focus')) {
                        this.form.trigger('submit');
                    }
                },
                dataSource: function (query, callback) {
                    var provider = this.getData().control.options.get('provider');
                    ymaps.geocode(query, { provider: provider })
                        .then(function (res) {
                            var results = [];
                            res.geoObjects.each(function (geoObject) {
                                var props = geoObject.properties,
                                    text = props.get('text'),
                                    name = props.get('name'),
                                    description = props.get('description'),
                                    // tags = props.get('metaDataProperty.PSearchObjectMetaData.Tags', [])
                                    tags = $.myMap(props.get('metaDataProperty.PSearchObjectMetaData') &&
                                            props.get('metaDataProperty.PSearchObjectMetaData.Tags') || [], function (t) { return t.tag });
                                results.push(
                                    text || [name, description]
                                        .concat(tags)
                                        .filter(Boolean)
                                        .join(', ')
                                );
                            });
                            callback(results);
                        });
                },
                onSubmit: function (e) {
                    e.preventDefault();
                    this.events.fire('search', {
                        request: this.field.val()
                    });
                },
                onStateChange: function () {
                    var results = this.getData().state.get('results'),
                        result = results && results[0];
                    if (result) {
                        result.options.set('preset', 'twirl#darkblueStretchyIcon');
                        result.properties.set('iconContent', result.properties.get('name'));
                        // Можно определить свой макет иконки.
                        // result.options.set('iconLayout', ymaps.templateLayoutFactory.createClass('<i class="icon-google_maps icon-large"/>'));
                        // result.options.set('iconOffset', [-8, -28]);
                        // Открытие балуна на результате
                        // result.events.add('mapchange', this.onShowResult, this);
                    }
                },
                onShowResult: function (e) {
                    /*
                    var index = e.get('resultIndex'),
                        result = this.getData().control.getResult(index);
                    result.then(function (res) {
                        res.balloon.open();
                        console.log('result: ', res);
                    }, function (err) {
                        console.log('error: ', err);
                    });
                    */
                    e.get('target').events.remove('mapchange', this.onShowResult, this);
                    e.get('target').balloon.open();
                }
            }
        );
        
        var searchControl = new ymaps.control.SearchControl({
            layout: MySearchControlLayout,
            provider: 'yandex#map'
        });
        myMap.controls.add(searchControl, { left: 10, top: 10 });

        function showAddress (value) {
            geocoder = new YMaps.Geocoder(
                value,  {
                    results: 1,
                    boundedBy: map.getBounds()
                }
            );
            YMaps.Events.observe(geocoder, geocoder.Events.Load, function () {
                if (this.length()) {
                    map.setCenter(this.get(0).getGeoPoint());
                    map.addOverlay(this.get(0),9,17);
                    this.get(0).setBalloonContent(this.get(0).text);
                    this.get(0).openBalloon();
                } else { alert("Ничего не найдено") }
            });
            YMaps.Events.observe(geocoder, geocoder.Events.Fault,
                function (error) { alert("Произошла ошибка: " + error.message) });
        }
    };
};

export default mapInit;
