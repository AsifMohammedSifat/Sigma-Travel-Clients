import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Main from './Main/Main';

const Home = () => {
    
    return (
        <div>
     
            <Banner></Banner>
            {/* service title  */}
            <h1 className="brand-name text-center mt-5 text-dark" id="serviceid">Amazing Places to Visit</h1>
            {/* service description  */}
            <p className="text-center">Our specialists can help you plan your beach trip, individually focusing on  your tastes and interests, to the destinations below.
            </p>

            {/* /service*/}
            <Services></Services>
            <Main></Main>
            
          
        </div>
      
    );
};

export default Home;