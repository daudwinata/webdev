import React, { Component } from 'react';

//Click on a language should remove it 
//https://codepen.io/NathKr/pen/wXbmYE

class RenderingListAndRemoveItem extends Component {
    state = {
        movies: [
            "Harry Potter",
            "God Father",
            "King KOng"
        ]
    }

    render() {
        const elements = this.state.movies.map((movie, index) =>
            <p onClick={() => {
                console.log(index);

                let tmpMovies = [...this.state.movies];
                tmpMovies.splice(index, 1);
                this.setState({ movies: tmpMovies });

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

export default RenderingListAndRemoveItem;