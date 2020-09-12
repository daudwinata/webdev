import React, { Component } from 'react';

//https://codepen.io/NathKr/pen/ERzQer

class RenderingIndex extends Component {

    render() {
        const movies = [
            "Harry Potter",
            "God Father",
            "King KOng"
        ];

        const elements = movies.map((movie, index) =>
            <p onClick={() => {
                console.log(index);
            }}> {index + 1} : {movie}
            </p>
        );

        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default RenderingIndex;