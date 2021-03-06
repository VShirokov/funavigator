import funbox_icon from 'images/funbox_map-icon.png';

//map settings
export const mapApiKey="https://api-maps.yandex.ru/2.1/?apikey=4f731e3e-f9a0-44be-9925-42dddc93b6dd&lang=ru_RU";
export const mapDomId="ymap";
export const mapWidth="100vw";
export const mapHeight="100vh";
export const mapDefaultZoom=17;

export const mapMoscowLatitude=55.734111;
export const mapMoscowLongitude=37.623914;

export const mapKazanLatitude=55.780471;
export const mapKazanLongitude=49.126195;

export const mapUlianovskLatitude=54.321119;
export const mapUlianovskLongitude=48.399449;

//default icon size and position
export const iconSizeX = 70;
export const iconSizeY = 70;
export const iconOffsetX = -30;
export const iconOffsetY = -70;

//declaration placemarks
export const moscowPlacemark =  {
    "latitude": mapMoscowLatitude,
    "longitude": mapMoscowLongitude,
    "icon_src": funbox_icon,
    "sizeX": iconSizeX,
    "sizeY": iconSizeY,
    "offsetX": iconOffsetX,
    "offsetY": iconOffsetY,
};

export const kazanPlacemark =  {
    "latitude": mapKazanLatitude,
    "longitude": mapKazanLongitude,
    "icon_src": funbox_icon,
    "sizeX": iconSizeX,
    "sizeY": iconSizeY,
    "offsetX": iconOffsetX,
    "offsetY": iconOffsetY,
};

export const ulianovskPlacemark =  {
    "latitude": mapUlianovskLatitude,
    "longitude": mapUlianovskLongitude,
    "icon_src": funbox_icon,
    "sizeX": iconSizeX,
    "sizeY": iconSizeY,
    "offsetX": iconOffsetX,
    "offsetY": iconOffsetY,
};
