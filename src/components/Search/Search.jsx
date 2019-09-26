import React from 'react';
import cn from 'cn-decorator';
import './Search.less';
import mapInit from 'utils/map-init.js';

@cn('search')
class Search extends React.Component {

    componentDidMount() {
        mapInit(mapId, mapMoscowLatitude, mapMoscowLongitude, mapDefaultZoom);
    }

    render(cn) {
        return (
            <div id={mapId} style={{ width: mapWidth, height: mapHeight }} className={cn('')} />
        );
    };
}

export default Search;
