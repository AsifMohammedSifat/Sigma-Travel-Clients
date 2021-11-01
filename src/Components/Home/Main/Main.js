import React from 'react';

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
    faComments,
    faMugHot,
    faPlaneDeparture
} from '@fortawesome/free-solid-svg-icons';

import './Main.css';

const Main = () => {
    
    // fonst awesome icon 
        const commentIcon = <FontAwesomeIcon icon={faComments}/>
        const mugIcon = <FontAwesomeIcon icon={faMugHot} />
        const travelIcon = <FontAwesomeIcon icon={faPlaneDeparture}/>

    return (
        <div className="my-5 ">
                    {/* how sigma travel work section  */}
            <section className="container">
                
                    <h1 className="text-center brand-name text-dark">How it Works?</h1>
                    <div className="row row-cols-1 container row-cols-md-3 mx-auto text-center">

                        {/* work-1  */}
                        <div className="col">
                            <h1 style={{fontSize:"80px"}}>{commentIcon}</h1>
                            <h3>Speak to Specialist</h3>
                            <p>we find that these almost always leave a more meaningful impact on our travellers.</p>

                        </div>
                        {/* work-2  */}
                        <div className="col">
                            <h1 style={{fontSize:"80px"}}>{mugIcon}</h1>
                            <h3>We plan, you relax</h3>
                            <p>How you see the world matters. We care deeply about the places we travel to, and we work hard to ensure your visit has a positive effect.</p>

                        </div>

                        {/* work-3  */}
                        <div className="col">
                            <h1 style={{fontSize:"80px"}}>{travelIcon}</h1>
                            <h3>Travel Worry Free</h3>
                            <p>We seek out experiences and places to stay that mirror our values  with safety and without worry.</p>


                        </div>
                    
                    </div>

                    {/* <hr className="w-50 mx-auto"/> */}

                    <div className="row">
                        <p> Our experts listen to your interests, share their advice, and then handcraft a personalised itinerary based on what you want and nothing more.They 'll work with you until you’re satisfied with every detail. We’ll then manage all your reservations and logistics so that you’re taken care of from the moment you step off the plane until your return. Whether you choose to include guides throughout or set off on a more independent trip, you can travel reassured, knowing that we have more than 20 years of experience and provide you with around-the-clock support to smooth out the unexpected.</p>
                    </div>
            
            </section>
           <hr />

            {/* why travel with sigma  */}
            <section className="container">
             
                          <h1 className="text-center brand-name text-dark">Why Travel with Sigma?</h1>
                <div className="why-choose-us-banner">
                    <div className="row d-sm-flex ">
                        <div className="col col-12 col-lg-7 order-sm-2 text-center choose-us-text"> 
                        <h3 className="brand-name text-white">Why Choose Us?</h3>
                        Our specialists have all travelled extensively in their regions and they return each year to learn more to find new and different ways for you to experience your destination. That means that we can arrange immersive tours and off-the-beaten-path activities to help you get at the authentic soul of a place. We also work with the best local guides, some of whom are long-time friends of Audley, and can suggest the most interesting hotels, homestays and lodges.
                        </div>
                        <div className="col order-sm-1 col-12 col-lg-5 text-center choose-us-text"> 
                        <img className="w-100 img-fluid rounded-3" src="https://i.pinimg.com/originals/49/42/ab/4942ab41a3358d14cded6d951fad3ba6.gif" alt="" />
                        </div>
                    </div>
                </div>

            </section>



        </div>
    );
};

export default Main;