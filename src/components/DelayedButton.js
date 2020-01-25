import React, { Component } from 'react';

export default class DelayedButton extends Component {

    constructor(props) {
        super()
    }

    render() {
        return <button onClick={ (e) => {
            e.persist()
            this.props.onDelayedClick(e)
        }}>Delayed</button>;
    }

}

