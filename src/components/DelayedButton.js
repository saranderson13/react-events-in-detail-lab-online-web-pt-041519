import React, { Component } from 'react';

export default class DelayedButton extends Component {

    // constructor() {
    //     super()
    // }

    handleClick = (e) => {
        e.persist()
        this.props.onDelayedClick(e)
    }

    render() {
        return (
            // INLINE OPTION
            // <button onClick={ (e) => {
            //     e.persist()
            //     this.props.onDelayedClick(e)
            // }}>Delayed</button>

            // OPTION WITH NAMED FUNCTION
            <button onClick={this.handleClick}>Delayed</button>
        )
    }

}

