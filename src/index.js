import React from 'react';
import ReactDom from 'react-dom';

//Components
import Header from './components/header'

const App = () => {
    return (
        <div>
            <Header/>
        </div>
    )
}


ReactDom.render(<App/>, document.querySelector('#root'));