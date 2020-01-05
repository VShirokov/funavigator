import React from 'react';
import cn from 'cn-decorator';
import Ymap from 'components/Map/Map.jsx';
import Search from 'components/Search/Search.jsx';
import './MainPage.less';

@cn('main-page')
class MainPage extends React.Component {

    render(cn) {
        return (
            <div className={cn('')}>
                <Ymap />
                <Search />
            </div>
        );
    };
}

export default MainPage;
