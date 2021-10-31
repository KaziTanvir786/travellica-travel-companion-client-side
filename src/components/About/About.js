import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about" className="mt-4 pt-4">
            <div className="container about-body">
                <div className="about-part px-3">
                    <img src="https://icon-library.com/images/airplane-icon-png/airplane-icon-png-25.jpg" alt="" />
                    <p className="mt-4" style={{ textAlign: "justify", fontSize: "18px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum numquam dolore temporibus laudantium cum aspernatur soluta, repudiandae minus nam voluptas ipsum, distinctio id dolorem! Sed provident fugit nisi quisquam id.
                    </p>
                </div>
                <div className="about-part px-3">
                    <img src="https://icon-library.com/images/hotel-icon/hotel-icon-1.jpg" alt="" />
                    <p className="mt-4" style={{ textAlign: "justify", fontSize: "18px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum numquam dolore temporibus laudantium cum aspernatur soluta, repudiandae minus nam voluptas ipsum, distinctio id dolorem! Sed provident fugit nisi quisquam id.
                    </p>
                </div>
                <div className="about-part px-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/3942/3942053.png" alt="" />
                    <p className="mt-4" style={{ textAlign: "justify", fontSize: "18px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum numquam dolore temporibus laudantium cum aspernatur soluta, repudiandae minus nam voluptas ipsum, distinctio id dolorem! Sed provident fugit nisi quisquam id.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;