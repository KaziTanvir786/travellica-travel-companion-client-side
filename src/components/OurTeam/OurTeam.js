import React from 'react';
import './OurTeam.css';

// https://i.ibb.co/kBSSzTb/team-3.jpg
// https://i.ibb.co/J73Qmz8/ceo.jpg
// https://i.ibb.co/9ycRBzN/team-1.jpg
// https://i.ibb.co/7Smgq5W/team-2.jpg

const OurTeam = () => {
    return (
        <div className="team-container">
            <h1 className="title mx-auto my-5">Our Team</h1>
            <div id="team">
                <div className="team-member">
                    <img src="https://i.ibb.co/9ycRBzN/team-1.jpg" alt="" />
                    <h3 className="mt-4">San Bryan</h3>
                    <h6>Visa and Air Ticket consultant</h6>
                </div>
                <div className="team-member">
                    <img src="https://i.ibb.co/7Smgq5W/team-2.jpg" alt="" />
                    <h3 className="mt-4">Erika Nelson</h3>
                    <h6>Head of Tour Guide Team</h6>
                </div>
                <div className="team-member">
                    <img src="https://i.ibb.co/kBSSzTb/team-3.jpg" alt="" />
                    <h3 className="mt-4">David Nicon</h3>
                    <h6>Hotel and Residence Manager</h6>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;