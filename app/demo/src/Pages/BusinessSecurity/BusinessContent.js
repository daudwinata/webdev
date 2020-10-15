import React, { Component } from 'react';
import { BusinessData } from './BusinessData';
import Tour from './Tour';

class BusinessContent extends Component {
    state = {
        tours: BusinessData
    }

    removeTour = id => {
        // console.log(id);
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    };

    render() {
        const { tours } = this.state;

        return (
            <section className="tourList">
                {
                    tours.map(tour => (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                    ))
                }
            </section>
        )
    }
}

export default BusinessContent;