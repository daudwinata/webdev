import React, { Component } from 'react';

//we use state object and setState for replacing it

class StateSample extends Component {
    state = { msg: "Hello" };
    clickState = () => {
        if (this.state.msg === "Hello") {
            this.setState({ msg: "World" });
        }
        else {
            this.setState({ msg: "Hello" });
        }
    }

    render() {
        return (
            <div className="App" >
                <h1>{this.state.msg}</h1>
                <button onClick={this.clickState}>ClickMe</button>
            </div>
        )
    }
}

export default StateSample;