import React, { Component } from 'react';

//another test
//https://codepen.io/NathKr/pen/xzeMox

class InlineCSS extends Component {
    state = { isBlue: true };

    render() {
        const blueStyle = { color: "blue" };
        const redStyle = { color: "red" };
        const clickHandler = () => {
            this.setState({ isBlue: !this.state.isBlue });
        }

        return (
            <div>
                <button style={this.state.isBlue ? blueStyle : redStyle} onClick={clickHandler}>Click me</button>
            </div>
        );
    }
}

export default InlineCSS;