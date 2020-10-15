import React, { Component } from 'react';
import BusinessContent from './BusinessContent';
import { Layout } from '../../Layout';

class Business extends Component {
    render() {
        return (
            <Layout>
                <div className="business-security">
                    <div className="business-security_h1-container">
                        <h1>ADT next <br />generation panel</h1>
                        <p>Enjoy peace of mind with our new innovative 360° solution for your home or business</p>
                    </div>
                </div>

                <BusinessContent />
            </Layout>
        )
    }
}

export default Business;