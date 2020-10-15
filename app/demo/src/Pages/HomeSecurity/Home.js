import React, { Component } from 'react';
import { Layout } from '../../Layout';
import { HomeData, HomeDataa } from './HomeData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import icon1 from "../../images/icon-touch-white.png";
import icon2 from "../../images/icon-building-white.png";
import icon3 from "../../images/icon-hand-phone-white.png";

class Home extends Component {
    state = {
        HomeData: HomeData,
        HomeDataa: HomeDataa
    }

    render() {
        const { HomeData, HomeDataa } = this.state;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        }

        return (
            <Layout>
                <div className="home-security">
                    <div className="home-security_h1-container">
                        <h1>ADT next <br />generation panel</h1>
                        <p>Enjoy peace of mind with our new innovative 360° solution for your home or business</p>
                    </div>
                </div>

                <div className="home-banner-icons-wrapper">
                    <h2>The best of both of both worlds</h2>
                    <p>Smart home and business security</p>

                    <div className="home-banner-banner-icons">
                        <div class="home-banner-icons-block">
                            <img alt="icon-touch-white" src={icon1} />
                            <h3>A touch of genius</h3>
                        </div>

                        <div className="home-banner-icons-block">

                            <img alt="icon-building-white" src={icon2} />
                            <h3>One step ahead</h3>
                        </div>

                        <div className="home-banner-icons-block">
                            <img alt="icon-hand-phone" src={icon3} />
                            <h3>Always with you</h3>
                        </div>
                    </div>
                </div>

                <div className="home-carousel">
                    <h2>Let's talk about tech</h2>
                    <Slider {...settings}>
                        {HomeData.map((photo) => {
                            return (
                                <div className="home-security_slider">
                                    <div className="home-security_slider-icon">
                                        <img src={photo.url} />

                                        <p>{photo.text}</p>
                                        <h4>{photo.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </Layout>
        )
    }
}

export default Home;