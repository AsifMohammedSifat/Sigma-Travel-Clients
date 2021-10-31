import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components//Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import MyBooking from './Components/MyBooking/MyBooking';
import AllBooking from './Components/DashBoard/AllBooking/AllBooking';
import AddTour from './Components/DashBoard/AddTour/AddTour';
import ManageAllBooking from './Components/DashBoard/ManageAllBooking/ManageAllBooking';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          {/* about us  */}
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>

          {/* my booking */}
          <Route path="/mybooking">
            <MyBooking></MyBooking>
          </Route>

          {/*dashboard--- all booking  */}
          <Route path="/allbooking">
            <AllBooking></AllBooking>
          </Route>

          {/* dashboard ---add tour  */}
          <Route path="/addtour">
            <AddTour></AddTour>
          </Route>
          {/* dashboard ---manage all booking  */}
          <Route path="/managebooking">
            <ManageAllBooking></ManageAllBooking>
          </Route>

          {/* register or login  */}
          <Route path="/login">
            <Login></Login>
          </Route>

          {/* default route  */}
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* wrong search  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

        {/* footer  */}
        <Footer></Footer>
      </Router>
     
      </AuthProvider>
    </div>
  );
}

export default App;
