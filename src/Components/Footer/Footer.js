import React from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faFacebook,faTwitter,faLinkedin,faPinterest,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    // fonst awesome icon 
        const fbIcon = <FontAwesomeIcon icon={faFacebook} />
        const twtIcon = <FontAwesomeIcon icon={faTwitter} />
        const liIcon = <FontAwesomeIcon icon={faLinkedin} />
        const piIcon = <FontAwesomeIcon icon={faPinterest} />
        const ytIcon = <FontAwesomeIcon icon={faYoutube} />
        const inIcon = <FontAwesomeIcon icon={faInstagram }/>

    return (
        <div className="bg-dark pt-5">
            <h3 className="text-center text-white ">Follow Us</h3>
          
            <div className="mx-auto fs-2 text-center text-white">
                {fbIcon} {twtIcon} {liIcon}  {piIcon} {ytIcon} {inIcon}
            </div>

            <div className="bg-dark text-white text-center">
                <p className="text-white bg-dark fs-6 m-0">
                    Registered Office: Sigm Travel Group Limited, The New Mill, New Mill Lane, Witney, Bangladesh, OX29 9 SX
                </p>
                <hr />
                <small >
                     ©2021 Audley Travel | Registered in Bangladesh: 3190720|All right reserved by  ©SigmaTravel
                </small> <br />
                <span className="brand-name text-center text-white">
                    Sigma Travel <br />
                </span>
                <small >
                     ©2021 ©SigmaTravel All right reserved by  
                </small>
            </div>
            
                    
        </div>
    );
};

export default Footer;