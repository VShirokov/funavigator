/**
 * Initialization of Yandex maps using the standard API method
 * @mapInit
 * @param {string} id - id DOM element.
 * @param {number} latitude - The title of the book.
 * @param {number} longitude - The author of the book.
 * @param {number} defaultZoom - The author of the book.
 */

import {
    mapMoscowLatitude,
    mapMoscowLongitude,
    mapKazanLatitude,
    mapKazanLongitude,
    mapUlianovskLatitude,
    mapUlianovskLongitude,
    iconSizeX,
    iconSizeY,
    iconOffsetX,
    iconOffsetY,
} from 'constants/configuration.js';
import funbox_icon from 'images/funbox_map-icon.png';
import { createPlacemark } from 'utils/offices-init.js';

const mapInit = (id, latitude, longitude, defaultZoom) => {
    ymaps.ready(init);
    function init() {
        const myMap = new ymaps.Map(id, {
            center: [latitude, longitude],
            zoom: defaultZoom,
            controls: [],
        });

        myMap.geoObjects.add(
            createPlacemark(
                mapMoscowLatitude,
                mapMoscowLongitude,
                funbox_icon,
                iconSizeX,
                iconSizeY,
                iconOffsetX,
                iconOffsetY,
            )
        );

        myMap.geoObjects.add(
            createPlacemark(
                mapKazanLatitude,
                mapKazanLongitude,
                funbox_icon,
                iconSizeX,
                iconSizeY,
                iconOffsetX,
                iconOffsetY,
            )
        );

        myMap.geoObjects.add(
            createPlacemark(
                mapUlianovskLatitude,
                mapUlianovskLongitude,
                funbox_icon,
                iconSizeX,
                iconSizeY,
                iconOffsetX,
                iconOffsetY,
            )
        );
    };
};

export default mapInit;
