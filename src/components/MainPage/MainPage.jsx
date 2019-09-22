import React from 'react';
import cn from 'cn-decorator';
import Ymap from 'components/Map/Map.jsx';
import './MainPage.less';

@cn('main-page')
class MainPage extends React.Component {

    render(cn) {
        return (
            <div className={cn('')}>
                <Ymap />
            </div>
        );
    };
}

export default MainPage;
