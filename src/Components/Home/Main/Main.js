import React from 'react';

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
    faComments,
    faMugHot,
    faHelicopter
} from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    
    // fonst awesome icon 
        const commentIcon = <FontAwesomeIcon icon={faComments}/>
        const mugIcon = <FontAwesomeIcon icon={faMugHot} />
        const travelIcon = <FontAwesomeIcon icon={faHelicopter}/>

    return (
        <div className="my-5 container">
            <h1 className="text-center brand-name text-dark">How it Works?</h1>
            <div className="row row-cols-1 row-cols-md-3 mx-auto text-center">

                {/* work-1  */}
                <div className="col">
                    <h1 style={{fontSize:"80px"}}>{commentIcon}</h1>
                    <h3>Speak to Specialist</h3>

                </div>
                {/* work-2  */}
                <div className="col">
                    <h1 style={{fontSize:"80px"}}>{mugIcon}</h1>
                    <h3>We plan, you relax</h3>

                </div>

                {/* work-3  */}
                <div className="col">
                    <h1 style={{fontSize:"80px"}}>{travelIcon}</h1>
                    <h3>Travel Worry Free</h3>

                </div>
              
            </div>

            <div className="row row-cols-8 ">
                <p> Our experts listen to your interests, share their advice, and then handcraft a personalised itinerary based on what you want and nothing more.They 'll work with you until you’re satisfied with every detail. We’ll then manage all your reservations and logistics so that you’re taken care of from the moment you step off the plane until your return. Whether you choose to include guides throughout or set off on a more independent trip, you can travel reassured, knowing that we have more than 20 years of experience and provide you with around-the-clock support to smooth out the unexpected.</p>
            </div>
        </div>
    );
};

export default Main;