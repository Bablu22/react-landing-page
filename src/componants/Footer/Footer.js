import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <FooterDivOne></FooterDivOne>
                </div>
                <div>
                    <FooterDivTwo></FooterDivTwo>
                </div>
                <div>
                    <FooterDivThree></FooterDivThree>
                </div>
                <div>
                    <FooterDivFour></FooterDivFour>
                </div>
            </div>
            <Copyright></Copyright>
        </div>
    );
};

export default Footer;



const FooterDivOne = () => {
    return (
        <div className="footer-desc">
            <h6>Product</h6>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <li>Product</li>
            </ul>
        </div>
    );
};

const FooterDivTwo = () => {
    return (
        <div className="footer-desc">
            <h6>Company</h6>
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Submit a ticket</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
            </ul>
        </div>
    );
};

const FooterDivThree = () => {
    return (
        <div className="footer-desc">
            <h6>Users</h6>
            <ul>
                <li>Login</li>
                <li>Get a demo</li>
                <li>Talk to us</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
            </ul>
        </div>
    );
};

const FooterDivFour = () => {
    return (
        <div className="footer-desc">
            <h6>Guides</h6>
            <ul>
                <li>MSP</li>
                <li>MSP Sales</li>
            </ul>
        </div>
    );
};



const Copyright = () => {
    return (
        <div className="copyright">
            <p>© 2022 Bablu Mia. All rights reserved.</p>
        </div>
    );
};

