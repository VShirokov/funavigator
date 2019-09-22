/**
 * Initialization of Yandex maps using the standard API method
 * @mapInit
 * @param {string} id - id DOM element.
 * @param {number} latitude - The title of the book.
 * @param {number} longitude - The author of the book.
 * @param {number} defaultZoom - The author of the book.
 */

export const mapInit = (id, latitude, longitude, defaultZoom) => {
    ymaps.ready(init);
    function init() {
        const myMap = new ymaps.Map(id, {
            center: [latitude, longitude],
            zoom: defaultZoom
        });
    };
};

export default mapInit;
