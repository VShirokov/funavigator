import React from 'react';
import cn from 'cn-decorator';
import './Search.less';
import { searchRequest } from 'utils/navigate.js';
import {
    mapDomId,
    mapMoscowLatitude,
    mapMoscowLongitude,
    mapDefaultZoom,
} from 'constants/configuration.js';

//import SearchList from 'components/SearchList/SearchList.jsx';

@cn('search')
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        //console.log(this.inputRef.current.value);
    }

    submitSearch(e) {
        e.preventDefault();
        searchRequest(mapDomId, mapMoscowLatitude, mapMoscowLongitude, mapDefaultZoom, this.inputRef.current.value);
        console.log(this.inputRef.current.value);
    }

    render(cn) {

        return (
            <div  className={cn('')}>
                <form className={cn('form')} onSubmit={(e) => this.submitSearch(e)}>
                    <input className={cn('input')} type="text" ref={this.inputRef} />
                    <button type="submit" className={cn('submit-button')} />
                </form>
                {/* <SearchList /> */}
            </div>
        );
    };
}

export default Search;
