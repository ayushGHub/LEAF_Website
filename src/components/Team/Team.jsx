import TeamMember0 from '../../images/Ayush.jpeg';
import TeamMember1 from '../../images/Dhruv.jpg';
import TeamMember2 from '../../images/Gauri.jpeg';
import TeamMember3 from '../../images/Vipul.jpeg';
import TeamMember4 from '../../images/Pooja.jpeg';
import { AiFillLinkedin } from 'react-icons/ai';
import './Team.css';

const teamDetails = [
  {
    memberName: 'Dr. Ayush Kumar',
    title: 'Team Member',
    imageUrl: TeamMember0,
    linkedinUrl: 'https://www.linkedin.com/in/aykumar1/'
  },
  {
    memberName: 'Vipul',
    title: 'Team Member',
    imageUrl: TeamMember3,
    linkedinUrl: 'https://www.linkedin.com/in/vipulkhandelwal1605/'
  },
  {
    memberName: 'Gauri',
    title: 'Team Member',
    imageUrl: TeamMember2,
    linkedinUrl: 'https://www.linkedin.com/in/gauri-singh-1376211a4/',
  },
  {
    memberName: 'Dhruv',
    title: 'Team Member',
    imageUrl: TeamMember1,
    linkedinUrl: 'https://www.linkedin.com/in/dhruvgupta14/',
  },
  {
    memberName: 'Pooja',
    title: 'Team Member',
    imageUrl: TeamMember4,
    linkedinUrl: 'https://www.linkedin.com/in',
  },
];
const Team = () => {
  const teamData = ['Team Members'];
  return (
    <section id='team'>
      <div className='content-box-lg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-6'>
              <div id='about-left'>
                <div className='vertical-heading'>
                  <h5>Who We Are</h5>
                  <h2>
                    Meet Our
                    <br />
                    <strong>Talented</strong> Team
                  </h2>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-sm-6'>
              <div id='about-right' className='team-about mt-2'>
                <p>
                  We're only as strong and as knowledgeable as our team. So here
                  are the folks which help us to fulfill our mission.
                </p>
              </div>
            </div>
          </div>

          {teamData.map((x) => (
            <div className='row'>
              <h2 className='text-center fw-bold mt-4 mb-3'>{x}</h2>
              <div className='team__member__main__container d-flex flex-wrap justify-content-center'>
                {teamDetails.map((teamMember, index) => (
                  <div className='team__member__card' key={index + 100}>
                    <div className='hovereffect'>
                      <img
                        className='team__member__image'
                        src={teamMember.imageUrl}
                        alt={teamMember.memberName}
                      />
                      <div className='overlay'>
                        <h2>{teamMember.memberName}</h2>
                        <div>
                          <a
                            className='info'
                            href={teamMember.linkedinUrl}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <AiFillLinkedin />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
