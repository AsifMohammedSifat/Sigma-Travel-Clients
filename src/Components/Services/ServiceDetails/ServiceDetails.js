import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

// import { useForm } from "react-hook-form";
// import axios from 'axios';
import useAuth from '../../../hooks/useAuth'

const ServiceDetails = () => {

    const { id } = useParams();
    const {user}=useAuth();
    const [service,setService]=useState({});
    const phoneRef = useRef(null);
    const addressRef = useRef(null);

    // for single details load 
    useEffect(()=>{
        fetch(`https://hidden-wave-70818.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[]);





   
 
  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    fetch("https://hidden-wave-70818.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: service._id,
        userName: user.displayName,
        userEmail: user.email,
        destinationName: service.name,
        price: service.price,
        days: service.days,
        nights: service.nights,
        phone: phone,
        address: address,
        status: "PENDING",
      })
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
          alert('successfully booked');
        phoneRef.current.value = "";
        addressRef.current.value = "";
      });
  };
    return (
        <div className="row container mx-auto my-5 gy-5">

            <div className="col col-12 col-lg-5 order-sm-2 text-center choose-us-text"> 
                     <div className="add-service  h-100 ">
                            <form className="sticky-top" onSubmit={handleSubmit}>

                              <span className="text-dark text-center fw-bold">Order Id</span>
                                <input placeholder="order_id" value={service._id}  className="rounded-3 border-dark  p-2" disabled/>
                                
                                <span className="text-dark text-center fw-bold">Destination Name</span>
                                 <input  placeholder="Service Name" value={service.name}  className="rounded-3 border-dark  p-2" disabled/>
                                
                                 <span className="text-dark text-center fw-bold">Your Name</span>
                                 <input  placeholder="Name" value={user.displayName}  className="rounded-3 border-dark  p-2" disabled/>
                                
                                 <span className="text-dark text-center fw-bold">Email</span>
                                  <input placeholder="Email"  value={user.email} className="rounded-3 border-dark  p-2" disabled/>

                                  <span className="text-dark text-center fw-bold">Address</span>
                              <textarea placeholder="Address" ref={addressRef} className="rounded-3 border-dark  p-2"/>
                              <span className="text-dark text-center fw-bold">Phone No</span>
                              
                                <input type="number" ref={phoneRef}  placeholder="Phone No" className="rounded-3 border-dark  p-2"/>
                                
                                <input className="bg-warning border-0 fw-bold p-2 rounded-3 text-dark" type="submit" value="Book Now" />
                                </form>
                            </div>
                              
                       </div>

                       {/* single service details  */}
        <div className="col order-sm-1 col-12 col-lg-7 text-center choose-us-text"> 

                                 {/* data pass by card  */}
            <div className="card details-card card-style h-100">
                {/* card img  */}
                <img src={service.img} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
                <div className="card-body">
                    {/* name  */}
                    <h6 className="card-title"><span className="card-value">{service.name}</span></h6>   
                    {/* price */}
                    <h6 className="card-title">Price:<span className="card-value">{service.price}$</span></h6>   
                    {/* duration */}
                    <p className="card-title text-dark fw-bold">{service.days} Days-{service.nights} Nights</p>   
                    {/* Description  */}
                    <p className="card-title" >Description:<span >{service.description}</span></p>   
                
                </div>

            </div>


 </div>
                            
                       
            
            
        </div>
    );
};

export default ServiceDetails;