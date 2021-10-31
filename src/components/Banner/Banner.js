import React from 'react';
import AvatarLogo from '../AvatarLogo/AvatarLogo';
import './Banner.css';
import { Random } from 'react-animated-text';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id="home" className="banner">
            <div className="banner-container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mt-4">
                        <AvatarLogo></AvatarLogo>
                        <div className="my-4">
                            <Random text="Y o u r   T r u s t e d   T r a v e l   C o m p a n i o n" />
                        </div>
                        <Link to="/login"><button className="banner-button my-4"><h6>Click here and join us now</h6></button></Link>
                    </div>
                </div>
                <div>
                    <img width="100%" src="https://i.ibb.co/zscYYsS/340-3406709-travel-collage-travel-collage-png-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;