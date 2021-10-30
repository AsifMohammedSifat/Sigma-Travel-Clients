import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../../hooks/useAuth';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faUser,faHome,faCheckCircle,faPlaneDeparture,faPlus,faTrashAlt,faListOl } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    
    // fonst awesome icon 
        const homeIcon = <FontAwesomeIcon icon={faHome} />
        const markIcon = <FontAwesomeIcon icon={faCheckCircle} />
        const userIcon = <FontAwesomeIcon icon={faUser} />
        const aboutIcon = <FontAwesomeIcon icon={faPlaneDeparture} />
        const plusIcon = <FontAwesomeIcon icon={faPlus} />
        const listIcon = <FontAwesomeIcon icon={faListOl} />
        const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />

    const {user,logout}=useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container-fluid ">
                        {/* brand name  */}
                        <Link to="/home" className="brand-name me-5">Sigma Travel</Link>

                        {/* toogler button for small screen  */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse mx-auto" id="navbarNavDropdown">
                                <ul className="navbar-nav nav-menus">
                                    {/* home  */}
                                    <li className="nav-item mx-auto">
                                    <Link to="/home" className="nav-item-text mx-auto fs-5" aria-current="page" >{homeIcon} Home</Link>
                                    </li> 
                                    
                                     {/* about us  */}
                                    <li className="nav-item mx-auto">
                                    <Link to="/aboutus" className="nav-item-text mx-auto fs-5" aria-current="page" >{aboutIcon} About Us</Link>
                                    </li>

                                   {user.email && 

                                //    my booking 
                                            <li className="nav-item mx-auto">
                                        <Link to="/mybooking" className="nav-item-text mx-auto fs-5" aria-current="page" >{markIcon} My Booking</Link>
                                        </li>
                                    }
                                

                                    {/* dashboard */}
                                     <li className="nav-item dropdown mx-auto">
                                    {user.email && <Link to=""
                                    className="nav-item-text fs-5  dropdown-toggle"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle ="dropdown"
                                    aria-expanded="false">
                                        {userIcon} Dashboard
                                    </Link>
                                    }
                                    <ul className="dropdown-menu mx-auto" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link to="allbooking" className="dropdown-item text-dark fs-5">{listIcon} All Booking</Link></li>

                                        <li><Link to="/managebooking" className="dropdown-item text-dark mx-auto fs-5" >{deleteIcon} Manage Booking</Link>
                                        </li>

                                        <li><Link to="addtour" className="dropdown-item fs-5">{plusIcon} Add Tour</Link></li>
                                    </ul>
                                    </li>
                                    
                                  

                                </ul>
                                <ul className="navbar-nav ms-auto">

                                    {/* dynamics name of user                                     */}
                                    <li className="nav-item my-3 mx-auto">
                                         {!user.email? '':
                                            <div style={{fontSize:'10px'}} className="mx-auto me-2"> <button className="rounded-3  bg-warning border-0 p-2 text-dark fw-bold">
                                        {/* <img  className="" src={user.photoURL} alt="" /> */}
                                        <small>Name:{user.displayName}</small>
                                        </button>
                                        </div> }
                                    </li>

                                    {/* dynamics logout or login button */}
                                    <li className="nav-item my-3 mx-auto">
                                      {!user.email ? <Link  className="fs-6  fw-bold nav-item-text p-2 rounded-3 bg-warning " to="/login">Login</Link>
                                        :<Link  to="" className="fs-6 fw-bold nav-item-text bg-danger p-2 rounded-3" onClick={logout}>LogOut </Link>
                                     }
                                    </li>
                               </ul>
                        </div>
                    </div>
     </nav>
            
        </div>
    );
};

export default Navbar;