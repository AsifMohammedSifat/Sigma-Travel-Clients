import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const SingleService = (props) => {
    const {_id,price,days,nights,name,description,img}=props.service;
    // fonntawwesome icon 
    const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />
  
   
    return (
       <div>
           
            {/* data pass by card  */}
            <div className="card details-card card-style h-100">
                {/* card img  */}
                <img src={img} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
                <div className="card-body">
                    {/* name  */}
                    <h6 className="card-title"><span className="card-value">{name}</span></h6>   
                    {/* price */}
                    <h6 className="card-title">Price:<span className="card-value">{price}$</span></h6>   
                    {/* duration */}
                    <p className="card-title text-dark fw-bold">{days} Days-{nights} Nights</p>   
                    {/* Description  */}
                    <p className="card-title">Description:<span >{description.slice(0,150)}...see more by booking</span></p>   
                
                </div>

                {/* details button of card  */}
                <div className="card-footer">
                    <Link to={`/booking/${_id}`} >
                        <button className="btn btn-warning text-white fw-bold">{infoIcon}  Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;