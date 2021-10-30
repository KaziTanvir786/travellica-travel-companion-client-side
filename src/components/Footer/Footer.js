import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-4 pt-4">
            <h6 className="py-4">All rights reserved to Inova Eye Hospital ©</h6>
            <div className="mx-auto input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn footer-button" type="button" id="button-addon2">Subsccribe</button>
            </div>
            <div className="footer-body">
                <div id="left-part">
                    <h5 className="title mx-auto">Important Links</h5>
                    <div>
                        <p><a href="https://www.dghs.gov.bd">Directorate General of Health Services</a></p>
                        <p><a href="https://www.who.int/">World Health Organization</a></p>
                        <p><a href="https://corona.gov.bd/">Covid-19 Web Portal</a></p>
                        <p><a href="https://www.cureblindness.org/">Help to cure blindness</a></p>
                    </div>
                </div>
                <div id="middle-part">
                    <h5 className="title mx-auto">Contact Us</h5>
                    <p>Inova Eye Hospital</p>
                    <p>27 Old Woodcourt Street, Virginia, USA</p>
                    <p>Cell: +995 1452 441122</p>
                    <p>Email: info@inova.hospital.com</p>
                </div>
                <div id="right-part">
                    <h5 className="title mx-auto">Social Networks</h5>
                    <div className="my-4">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;