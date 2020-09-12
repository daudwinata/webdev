import React, { Component } from 'react';

//Button should have isOk as props and button text as children

//If isOk is true then button is info

//If isOk is false then button is error

//You need to implement the following with two instances of Button component

//https://codepen.io/NathKr/pen/NzVOKx


//vacation exercise:
//https://github.com/NathanKr/React/tree/master/react_course_online/coding_exercises/advanced_rendering/VactionWishList


class DynamicClass extends Component {

    state = { flag: true };
    clickStyle = () => {
        this.setState({ flag: !this.state.flag });
    }

    render() {

        return (
            <div className="App">
                <button onClick={this.clickStyle}>Click</button>
                <h2 className={this.state.flag ? "style1" : "style2"}>Dynamic styling</h2>
            </div>
        );
    }
}

export default DynamicClass;