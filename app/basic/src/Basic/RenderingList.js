import React, { Component } from 'react';

//other project: https://codepen.io/NathKr/pen/vrwWGy

class Rendering extends Component {

    render() {
        const movies = [
            { name: "Harry Potter", duration: 138 },
            { name: "God Father", duration: 120 },
            { name: "King KOng", duration: 180 }
        ];

        const elementsMovies = movies.map(movie =>
            <div>
                <h2>{movie.name}</h2>
                <p>{movie.duration}</p>
            </div>
        );

        return (
            <div>
                {elementsMovies}
            </div>
        );
    }
}

export default Rendering;