import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="banner-text w-75 ms-4">
                    <h1 style={{ marginTop: "140px", fontSize: "42px", lineHeight: "60px", fontWeight: "700" }}>

                        <div>
                            <h6 style={{ color: "gray" }}>We promise to keep your eyes healthier than ever!</h6>
                        </div>
                    </h1>
                    <a href="/services"><button className="banner-button m-4">Visit Our Services</button></a>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;