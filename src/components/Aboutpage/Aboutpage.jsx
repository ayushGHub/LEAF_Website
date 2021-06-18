import aboutBg from '../../images/about_bg.jpg';
import './Aboutpage.css';

const Aboutpage = () => {
  const data = [
    'We aim at improving the education standards in our nation, starting with the most deprived sector of society and for the start being gender specific, we are keeping our priority as educating the girls of the rural section of the society and focusing on how to improve and enhance their conditions and how to seed the importance of education in the society, their parents and in the child themselves.',
    'Starting with the installation of computer labs in different government schools of Bihar, we are working on implementing the idea of increasing the range and scope for further development of our small initiative, by analysing and implementing the idea of how we can contribute to improve the level of education.',
    'For the start we are also focusing on improving and also bringing in the basic necessities like improving infrastructure, teaching standards and also measures by which we can develop the education system.',
  ];
  return (
    <section id='about'>
      <div id='about-01'>
        <div className='content-box-lg'>
          <div className='container'>
            <div className='row mb-4'>
              <div className='col-md-4 col-sm-6'>
                <div id='about-left'>
                  <div className='vertical-heading'>
                    <h5>Who We Are</h5>
                    <h2>
                      A <strong>Story</strong>
                      <br />
                      About Us
                    </h2>
                  </div>
                </div>
              </div>
              <div className='col-md-8 col-sm-6' data-wow-duration='1s'>
                <div id='about-right'>
                  {data.map((x) => (
                    <p className='about-right-testimonial'>{x}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 m-auto'>
                <img className='ml-2 d-block' src={aboutBg} alt='about_bg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
