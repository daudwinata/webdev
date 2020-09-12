import React, { Component } from 'react';

//fix the key 
//https://github.com/NathanKr/React/tree/master/react_course_online/assignments/advanced_rendering/popular_languages_with_keys

class RenderingWithKey extends Component {
    state = {
        movies: [
            { id: "id1", val: "Harry Potter" },
            { id: "id2", val: "God Father" },
            { id: "id3", val: "King Kong" }
        ]
    }

    render() {
        const elements = this.state.movies.map((movie, index) =>
            <p key={movie.id} onClick={() => {
                console.log(index);

                let tmpMovies = [...this.state.movies];
                tmpMovies.splice(index, 1);
                this.setState({ movies: tmpMovies });

            }}> {index + 1} : {movie.val}
            </p>
        );

        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default RenderingWithKey;