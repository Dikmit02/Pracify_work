import React from 'react'
import Carousel from "react-elastic-carousel";
import './company.css'
const index = () => {
    return (
        <div className="d-flex flex-column justify-content-between align-items-center section3">
            <div className="heading">
                <h1 className="title">Proudly presented by</h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
          </p>
            </div>
           
            <Carousel
                itemsToShow={5}
                showArrows={false}
                className="carousel section3-logos"
                enableMouseSwipe={false}
            >
                <a href="/" className="logo">
                    <img src="../asset/Group 39.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 64.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 55.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 64.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 39.png" alt="" />
                </a>

                <a href="/" className="logo">
                    <img src="./asset/Group 64.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 55.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 64.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 39.png" alt="" />
                </a>

                <a href="/" className="logo">
                    <img src="./asset/Group 64.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 55.png" alt="" />
                </a>
                <a href="/" className="logo">
                    <img src="./asset/Group 64.png" alt="" />
                </a>



            </Carousel>
        </div>

    )
}

export default index
