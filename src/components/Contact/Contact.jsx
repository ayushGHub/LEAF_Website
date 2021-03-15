import './Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='content-box-md'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div id='contact-left'>
                <div className='vertical-heading'>
                  <h5>Who We Are</h5>
                  <h2>
                    Contact
                    <br />
                    <strong>Us</strong>
                  </h2>
                </div>

                <div id='offices'>
                  <div className='row mt-4'>
                    <div className='col-md-6 col-sm-12'>
                      <div className='office'>
                        <h4>United States</h4>
                        <ul className='office-details'>
                          <li>
                            <i className='fas fa-mobile-alt'></i>
                            <span>+1 631 636 6779</span>
                          </li>
                          <li>
                            <i className='far fa-envelope'></i>
                            <span>contact@letseducateall.org</span>
                          </li>
                          <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Coming Soon...</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                      <div className='office'>
                        <h4>India</h4>
                        <ul className='office-details'>
                          <li>
                            <i className='fas fa-mobile-alt'></i>
                            <span>+91 960 677 2176</span>
                          </li>
                          <li>
                            <i className='far fa-envelope'></i>
                            <span>contact@letseducateall.org</span>
                          </li>
                          <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Coming Soon...</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className='social-list'>
                  <li>
                    <a href='https://www.google.com/' target="_blank" rel="noreferrer">
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.google.com/' target="_blank" rel="noreferrer">
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.google.com/' target="_blank" rel="noreferrer">
                      <i className='fab fa-google-plus-g'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.google.com/' target="_blank" rel="noreferrer">
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-6 mt-5'>
              <div id='contact-right'>
                <form action='https://formspree.io/xyybgywk' method='POST'>
                  <h4>Send Message</h4>
                  <p></p>
                  <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          placeholder='Your Name'
                          name='name'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          placeholder='Email Address'
                          name='_replyto'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          id='phone'
                          placeholder='Phone No.'
                          name='Phone'
                        />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          id='subject'
                          placeholder='Subject'
                          name='_subject'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Message'
                      name='message'
                    ></textarea>
                  </div>
                  <div id='submit-btn'>
                    <button
                      className='btn btn-general btn-yellow'
                      type='submit'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
