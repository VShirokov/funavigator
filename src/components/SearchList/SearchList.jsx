import React from 'react';
import cn from 'cn-decorator';
import './SearchList.less';
//import renderHTML from 'react-render-html';

@cn('search-list')
class SearchList extends React.Component {

    render(cn) {
        return (
            <div  className={cn('')}>
                <div className={cn('bar')}></div>
            </div>
        );
    };
}

export default SearchList;

