import React from 'react';

function Person(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.weight}</h1>
            <h1>{props.height}</h1>
        </div>
    )
}

export default Person;