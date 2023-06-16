
import {Link} from 'react-router-dom';

import Footer from './Footer';
import photo from '../images/about-bgImage.png'


export default function About(){

    return (
      
      <>
      <div className='about__container'>

      <img src={photo} alt="" />

      <div className='text__container'>

        <div className='text__container__title'>Don’t squeeze in a sedan when you could relax in a van.</div>
        <div className='text__container__desc'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)
        <br></br>
        <br></br>
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</div>
        <div className='text__container__box'>

        <p className='box-text'>Your destination is waiting.
        <br></br>
        Your van is ready.
        </p>
        <Link to='/vans'>
          <button className='about-button'>Explore our vans</button>
        </Link>

        </div>







      </div>


      </div>
      
      
      {/* <Footer/> */}
      </>
    )

}