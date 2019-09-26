import React from 'react';
import cn from 'cn-decorator';
import './Map.less';
import mapInit from 'utils/map-init.js';
import {
    mapId,
    mapWidth,
    mapHeight,
    mapMoscowLatitude,
    mapMoscowLongitude,
    mapDefaultZoom,
} from 'constants/configuration.js';

@cn('map')
class Map extends React.Component {

    componentDidMount() {
        mapInit(mapId, mapMoscowLatitude, mapMoscowLongitude, mapDefaultZoom);
    }

    render(cn) {
        return (
            <div id={mapId} style={{ width: mapWidth, height: mapHeight }} className={cn('')} />
        );
    };
}

export default Map;
