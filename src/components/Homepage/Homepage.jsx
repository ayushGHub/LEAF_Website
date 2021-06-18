
import Poster from '../../images/home_bg.jpeg';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Homepage.css';

const Homepage = () => {
  return (
    <section id='home'>
      <img className='home__bg__image' src={Poster} alt='poster' />
      <div className='home__content'>
        <div className='home__content__overlay'></div>
        <div className='home__content__inner'>
          <div className='home__content__inner__heading my-2'>
            <h1>Let's</h1>
            <br />
            <h1>
              Educate <span>All</span>
            </h1>
            <div className='home__content__inner__heading__typewriter__effect mt-2'>
              <Typewriter
                options={{
                  strings: [
                    "Let's Revolutionize",
                    "Let's Contribute",
                    "Let's Contribute",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className='home__buttons d-flex flex-column flex-md-row text-center'>
            <Link to='/info'>
              <button type='button' className='btn btn-general btn-home mt-3'>
                Explore More
              </button>
            </Link>
            <Link to='/payments'>
              <button type='button' className='btn btn-general btn-home mt-3'>
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
