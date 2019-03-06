import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Index extends Component {
    render() {
        return <div>Merhaba Reacticoslar!</div>;
    }
}
ReactDOM.render(<Index />, document.getElementById('app'));