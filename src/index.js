import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage/MainPage';
import './styles/index.less';

ReactDOM.render(
    <MainPage />, document.getElementById('root')
);
