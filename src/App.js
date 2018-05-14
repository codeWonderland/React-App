import React, { Component } from 'react';
import './App.css';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contents: this.props.contents }
    }

    render() { 
        return (
            <div className={'card'} >
                { this.state.contents } 
            </div>
        )
    }
}

class CompView extends React.Component {
    render() {

        const cardContents = <p>I made a thing</p>

        return (
            <div className={'comp-view'} >
                <Card contents={cardContents}/>
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
