import React, { Component } from 'react';
// import Tour from '../../Tour';
import Tour from '../Tour/Tour';
import './tourlist.scss'

class TourList extends Component {
    render() {
        return (
            <div>
                Hello from Tourlist
                <Tour />
            </div>
        )
    }
}

export default TourList;