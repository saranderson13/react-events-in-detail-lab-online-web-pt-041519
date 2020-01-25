import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    // constructor() {
    //     super()
    // }

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            // INLINE OPTION
            // <button onClick={ (e) => { this.props.onReceiveCoordinates([e.clientX, e.clientY]) }}>
            //     Coordinates
            // </button>

            // OPTION WITH NAMED FUNCTION
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }

}