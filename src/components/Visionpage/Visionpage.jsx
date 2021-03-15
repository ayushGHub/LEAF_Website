import './Visionpage.css';

const Visionpage = () => {
  const visionData = "The vision of our organization is to improve the education system in our country. The education system is the basic block which is very important in every developing country. So our focus is to improve the education level of government schools, because the percentage of rural population in India is 65.53% and most of the rural area kids are enrolled in government schools, due to the perks and schemes brought up by the government. If we want to educate and improve the standards of education in India we should target the larger masses and rural population, being the majority is thus our focus.";
  const cardData = [
    {
      description: 'On a mission to educate every child in India and make them technically sound by nurturing their foundational education strong.',
      icon: 'fas fa-rocket',
      title: 'Technology Driven Education',
    },{
      description: "Diversity promotes creativity, as well as better education, as those with differing viewpoints are able to collaborate to create solutions.",
      icon: 'fas fa-eye',
      title: "Scholastic Diversity"
    },
    {
      description: "Education and philanthropy are firmly linked. We strive to increase the ability of individuals associated with our mission to influence issues that affect them and their communities.",
      icon: 'fas fa-pencil-alt',
      title: "Community Empowerment"
    }
  ];
  return (
    <div id='about-02'>
      <div className='content-box-md about-02-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-4'>
              <div id='about-left'>
                <div className='vertical-heading'>
                  <h5>Who We Are</h5>
                  <h2>
                    Our{' '}
                    <strong>
                      <br />
                      Vision
                    </strong>
                  </h2>
                </div>
              </div>
            </div>

            <div className='col-md-8 col-sm-8'>
              <div id='about-right'>
                <p>{visionData}</p>
              </div>
            </div>
          </div>
          <div className='row about-02-container'>
            {cardData.map((x) => (
              <div className='col-md-4 col-sm-4'>
                <div className='about-item text-center'>
                  <i className={x.icon}></i>
                  <h3 className='mt-2'>{x.title}</h3>
                  <hr />
                  <p>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visionpage;
