import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="mt-4 pt-4">
            <div className="container about-body">
                <div className="about-part px-3">
                    <img src="https://icon-library.com/images/airplane-icon-png/airplane-icon-png-25.jpg" alt="" />
                    <p className="mt-4" style={{ textAlign: "justify", fontSize: "18px" }}>
                        We have good connections and collaborations with the airline companies as well as the embassy. We are offering the best packages with our collaborations for you to travel or any kind of vacational tour at the lowest price.
                    </p>
                </div>
                <div className="about-part px-3">
                    <img src="https://icon-library.com/images/hotel-icon/hotel-icon-1.jpg" alt="" />
                    <p className="mt-4" style={{ textAlign: "justify", fontSize: "18px" }}>
                        Worldwide best hotel and residence services are goodly collaborated with us. We can offer more than 60% discounts on the collaborated hotels. All kinds of services are directly provided from our members.
                    </p>
                </div>
                <div className="about-part px-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/3942/3942053.png" alt="" />
                    <p className="mt-4" style={{ textAlign: "justify", fontSize: "18px" }}>
                        We have the best qualified tour guides and coaches to guide you the locations. Our guide's are expert in different nation cultures and languages, so that you can comfortably travel around the world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;