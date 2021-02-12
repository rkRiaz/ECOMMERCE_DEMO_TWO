import React from 'react'
import './Banner.css'
import {Carousel} from 'react-bootstrap'
import bannerColumnOneImageOne from '../assets/images/bannerColumnOneImageOne.svg'
import bannerColumnOneImageTwo from '../assets/images/bannerColumnOneImageTwo.svg'
import silderImgOne from '../assets/images/silderImgOne.svg'
import bannerColumnTwoImageOne from '../assets/images/bannerColumnTwoImageOne.svg'
import bannerColumnTwoImageTwo from '../assets/images/bannerColumnTwoImageTwo.svg'
import tabImage6 from '../assets/images/tabImage6.jpg'


function Banner() {
    return (
        <div className="banner">
            <div className="banner__firstColumn">
                <div className="banner__firstColumnRowOne">
                    <img src={tabImage6} alt=""/>
                </div>
                <div className="banner__firstColumnRowTwo">
                    <img src={bannerColumnOneImageTwo} alt=""/>    
                </div>
            </div>
            <div className="banner__secondColumn">
                <Carousel className="banner__secondColumnSlider" prevIcon={<span aria-hidden="true"/>} nextIcon={<span aria-hidden="true"/>}>
                    <Carousel.Item interval={1000} className="banner__secondColumnSliderImg">
                        <img
                        className="d-block w-100"
                        src={tabImage6}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000} className="banner__secondColumnSliderImg">
                        <img
                        className="d-block w-100"
                        src={silderImgOne}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000} className="banner__secondColumnSliderImg">
                        <img
                        className="d-block w-100"
                        src={silderImgOne}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="banner__thirdColumn">
                <div className="banner__thirdColumnRowOne">
                    <img src={bannerColumnTwoImageOne} alt=""/>
                </div>
                <div className="banner__thirdColumnRowTwo">
                    <img src={bannerColumnTwoImageTwo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Banner
