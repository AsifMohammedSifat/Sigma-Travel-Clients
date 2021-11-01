import React,{useState,useEffect} from 'react';
import SingleService from './SingleService/SingleService';

const Services = () => {
    const [services,setServices]=useState([{img:"",price:"",description:"",name:"",days:"",night:""}]);

    useEffect(()=>{
        fetch('https://hidden-wave-70818.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            
             <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                       
                        
                        services.map(service => <SingleService 
                        key={service.name}                      
                        service={service}
                        ></SingleService>)
                    }
            </div> 
        
            
        </div>
    );
};

export default Services;