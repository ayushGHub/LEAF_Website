import TeamMember1 from '../../images/Dhruv.jpg';
import TeamMember2 from '../../images/Gauri.jpeg';
import TeamMember3 from '../../images/Vipul.jpeg';
import './Team.css';

const teamDetails = [
  {
    memberName: 'Vipul',
    title: 'Team Member',
    imageUrl: TeamMember3,
  },
  {
    memberName: 'Gauri',
    title: 'Team Member',
    imageUrl: TeamMember2,
  },
  {
    memberName: 'Dhruv',
    title: 'Team Member',
    imageUrl: TeamMember1,
  }
];
const Team = () => {
  const teamData = ['Our Executives', 'Our Volunteers'];
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
                    <div className='team__member__container'>
                      <img
                        className='team__member__image'
                        src={teamMember.imageUrl}
                        alt={teamMember.memberName}
                      />
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
