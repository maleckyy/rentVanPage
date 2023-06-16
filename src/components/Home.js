
import {Link} from 'react-router-dom';

// import Footer from './Footer';


export default function Home(){
    return (
      <>
        <div className='home-page__container'>
          <h1>You got the travel plans, we got the travel vans.</h1>
  
          <h3>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
        
          <Link to='/vans'>
          {/* </Link> */}

          <button className='home-page__container__button'>Find your van</button>

          </Link>
        
        </div>
        {/* <Footer/> */}
      </>
    )
  }