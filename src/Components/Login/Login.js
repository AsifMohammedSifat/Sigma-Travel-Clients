import React from 'react';
import useAuth from '../../hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';



const Login = () => {
     const googleIcon = <FontAwesomeIcon icon={faGoogle} />
     const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />

    const {
        user,
        login,
        name,
        email,
        password,
        error,
        signInWithEmailAndPassword,
        handleGoogleSignIN,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleNameChange,
        handleToggleChange,
        createNewUser,
        toggleLogIn,
        logOut
    }=useAuth();
   return (
    <div className="container  p-5 my-5">

        {/* log in or register header  */}
      <h1 className="text-warning text-center bg-dark rounded-3">Please {login? 'Login':'Register'}</h1>

      <form className="w-50 text-center mx-auto" onSubmit={handleRegistration}>
           {
           login? '':<div className="mb-3">

              <label htmlFor="inputname" className="form-label">Username</label>
              <input onBlur={handleNameChange} type="text" className="form-control" name="inputname" required/>
            </div>}


            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onBlur={handleEmailChange} type="email" className="form-control" required/>
              <div  className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
            </div>

            <div>
              <input onChange={toggleLogIn} onClick={handleToggleChange}  className="form-check-input" type="checkbox" name="" id="check" />
              <label  className="form-check-label mx-1" htmlFor="check">Already Register?</label>
            </div>
            <div className="text-danger my-3">{error}</div>
            <button type="submit" onMouseMove={handleToggleChange} className="btn btn-dark text-warning fw-bold">{login? 'Login':'Register'}</button>
            
      </form>
      <form className="mx-auto text-center" onSubmit={handleGoogleSignIN}>
            <button type="submit" className="bg-dark mx-auto mt-2 w-50 p-2 rounded-3 fs-6 me-2 border-0 text-warning fw-bold">{googleIcon} Sign in with Google</button>
    </form>

    </div>
  );

};

export default Login;