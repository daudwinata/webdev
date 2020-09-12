import React, { Component } from 'react'

class ComponentMount extends Component {
    write = (funcName, msg) => {
        if (msg === undefined) {
            msg = "";
        }
        console.log("Parent", funcName, msg);
    }

    constructor(props) {
        super(props);
        this.write("constructor");
    }

    render() {
        this.write("render");
        return (
            <div>
                <h2>Test component</h2>
            </div>
        );
    }

    componentDidMount() {
        this.write("ComponentDidMount");
    }
}

export default ComponentMount;