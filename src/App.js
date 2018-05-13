import React, { Component } from 'react';
import './App.css';

class CompView extends React.Component {
    render() {
        return (
            <div className={'comp-view'} >
                <p>I made a thing</p>
            </div>
        );
    }
}

function NavView() {
    return (
      <div className={'nav-view'}/>
    );
}

class App extends Component {

    render() {
        return (
            <div className="App">
                <CompView/>
                <NavView/>
            </div>
        )
    }
}

export default App;
