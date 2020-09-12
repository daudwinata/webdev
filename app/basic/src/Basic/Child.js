import React from 'react';

function Child(props) {
    return (
        <button onClick={props.someFunction}>Click me</button>
    )
}

export default Child;