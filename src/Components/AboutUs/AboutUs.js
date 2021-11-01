import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
             {/* why travel with sigma  */}
             <section>
                            
                    {/* about us banner         */}
                <div className="aboutus-banner">
                    <h1 className="brand-name text-center p-5 ">Travelling The Sigma Way...</h1>
                    
                </div>

                <div className="my-5">
                        <div className="row d-sm-flex container mx-auto">
                        <div className="col col-12 col-lg-7 order-sm-2 text-center choose-us-text"> 
                                <h3 className="brand-name text-dark ">About Us</h3>
                                <hr />
                                Our specialists have all travelled extensively in their regions and they return each year to learn more to find new and different ways for you to experience your destination. That means that we can arrange immersive tours and off-the-beaten-path activities to help you get at the authentic soul of a place. We also work with the best local guides, some of whom are long-time friends of Audley, and can suggest the most interesting hotels, homestays and lodges.
                                </div>
                                <div className="col order-sm-1 col-12 col-lg-5 text-center choose-us-text"> 
                                <img className="w-100 img-fluid rounded-3" src="https://cdn.dribbble.com/users/604891/screenshots/2400659/media/2ec94382697dc7bcf30cda64cdb8d2a1.gif" alt="" />
                                </div>
                            
                        </div>
                </div>


          </section>                              
        </div>
    );
};

export default AboutUs;