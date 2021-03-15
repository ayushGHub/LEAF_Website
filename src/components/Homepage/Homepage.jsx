import { useEffect, useRef } from 'react';
import Poster from '../../images/home_bg.jpeg';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Homepage.css';

const Homepage = () => {
  const form = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_G8bIDza4zHQRfm');
    script.async = true;
    const formCurr = form.current;
    formCurr.appendChild(script);

    return () => {
      formCurr.removeChild(script);
    };
  }, []);

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
            <div className='donatenow__button mt-3 ml-2'>
              <form ref={form}></form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
