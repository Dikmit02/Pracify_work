import React from 'react'
import './blog.css'
const index = () => {
    return (
        <div className="section5">
            <div className="blog">
                <div className="blog-img">
                    <img src="./asset/Group 114.png" alt="" />
                </div>
                <h1 className="title">Read Our Blog</h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <ul className="blog-cards">
                <li className="blog-card">
                    <img
                        src="./asset/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766@2x.jpg"
                        alt=""
                    />

                    <h3 className="blog-title">Blog Post One</h3>
                    <p className="blog-description">
                        Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod.
              </p>
                    <a href="/" className="read-more">
                        Read More
              </a>
                    <div className="line"></div>
                </li>
                <li className="blog-card">
                    <img
                        src="./asset/containers-with-products-table-with-copy-space_23-2148366089@2x.jpg"
                        alt=""
                    />
                    <h3 className="blog-title">Blog Post One</h3>
                    <p className="blog-description">
                        Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed
                <br /> do eiusmod.
              </p>
                    <a href="/" className="read-more">
                        Read More
              </a>
                    <div className="line"></div>
                </li>
                <li className="blog-card">
                    <img
                        src="./asset/potted-plant-near-cosmetics-bottles-jars_23-2147787938@2x.jpg"
                        alt=""
                    />
                    <h3 className="blog-title">Blog Post One</h3>
                    <p className="blog-description">
                        Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed <br />
                do eiusmod.
              </p>
                    <a href="/" className="read-more">
                        Read More
              </a>
                    <div className="line"></div>
                </li>
            </ul>
        </div>

    )
}

export default index
