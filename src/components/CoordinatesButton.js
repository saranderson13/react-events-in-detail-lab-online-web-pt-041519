import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <button onClick={ (e) => { this.props.onReceiveCoordinates([e.clientX, e.clientY]) }}>
                Coordinates
            </button>
        )
    }

}