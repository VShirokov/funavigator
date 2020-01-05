import React from 'react';
import cn from 'cn-decorator';
import './Map.less';
import mapInit from 'utils/map-init.js';
import {
    mapDomId,
    mapWidth,
    mapHeight,
    mapMoscowLatitude,
    mapMoscowLongitude,
    mapDefaultZoom,
} from 'constants/configuration.js';

@cn('map')
class Map extends React.Component {

    componentDidMount() {
        mapInit(mapDomId, mapMoscowLatitude, mapMoscowLongitude, mapDefaultZoom);
    }

    render(cn) {
        return (
            <div id={mapDomId} style={{ width: mapWidth, height: mapHeight }} className={cn('')} />
        );
    };
}

export default Map;
