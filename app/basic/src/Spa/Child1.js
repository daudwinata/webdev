import React, { Component } from 'react'

class Child1 extends Component {
    render() {
        return (
            <h2>
                Child1 component
                <p>{this.props.match.params.number}</p>
            </h2>
        )
    }
}

export default Child1;