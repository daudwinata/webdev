import React, { Component } from 'react';

//The component has props name initVal which is used to set the initial value of the counter

//The component has p element which is used to show the counter value

//The component has button element, each click increment the counter value



class Increment extends Component {
    state = { count: this.props.initVal };

    render() {
        return (
            <div className="App" >
                <button onClick={
                    () => this.setState({ count: this.state.count + 1 })
                }>Increment</button>

                <button onClick={
                    () => this.setState({ count: this.state.count - 1 })
                }>decrement</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Increment;