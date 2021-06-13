import React from 'react'
import Carousel from "react-elastic-carousel";
import './newsletter.css'
const index = () => {
    return (
        <div>
            <div className="section4">
                <img src="./asset/Group 86.png" alt="" className="img-quotes" />
                <Carousel
                    itemsToShow={1}
                    showArrows={false}
                    enableMouseSwipe={false}
                    className="review-carousel"
                >
                    <div className="review-card">
                        <img
                            src="./asset/woman-in-brown-jacket-and-black-shirt-3484683@3x.jpg"
                            alt=""
                            className="customer-img"
                        />
                        <h2 className="customer-name">Jane Doe</h2>
                        <div className="stars">

                        </div>
                        <p className="review">
                            Thank you for all the amazing produce and products you deliver
                            each week…
                            <br /> you make my life so easy an bring goodness into our family eating.
                            <br /> I’ve been roasting a lot of brussel sprouts and
                        </p>
                    </div>
                </Carousel>
                <div className="sub">
                    <h1 className="title">Subscribe to Our Newsletter</h1>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                    <br />
                    incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="email">
                        <input type="text" placeholder="Enter your email address " />
                        <button className="subscribe">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
