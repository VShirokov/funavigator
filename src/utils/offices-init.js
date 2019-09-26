/**
 * Function for creating icon on map
 * @createPlacemark
 * @param {number} latitude - latitude coordinate.
 * @param {number} longitude - longitude coordinate.
 * @param {string} icon - path to icon.
 * @param {number} sizeX - size image.
 * @param {number} sizeY - The author of the book.
 * @param {number} offsetX - The author of the book.
 * @param {number} offsetY - The author of the book.
 */

export function createPlacemark(latitude, longitude, icon_src, sizeX, sizeY, offsetX, offsetY) {
    return new ymaps.Placemark([latitude, longitude], {}, {
        iconLayout: 'default#image',
        iconImageHref: icon_src,
        iconImageSize: [sizeX, sizeY],
        iconImageOffset: [offsetX, offsetY]
    });
}
