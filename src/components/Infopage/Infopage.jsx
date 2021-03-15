import InfoContent from './InfoContent';
import './Infopage.css';
import Info_bg from '../../images/info_bg.jpg';

const Infopage = () => {
  const data = [
    {
      content: {
        heading: 'WHO WE ARE',
        data:
          'We work to educate the rural section of the society. Our aim is to seed the motivation and will among the students to study and attend schools and use their knowledge to brighten up their future and explore all the opportunities which are possible.',
      },
    },
    {
      content: {
        heading: 'WHAT DO WE DO',
        data:
          'We are currently working to install computer labs in atleast 5 schools in the state of Bihar. We are starting this small initiative of our’s by teaching the basics of computers to children. ',
      },
    },
    {
      content: {
        heading: 'OUR GOALS',
        data:
          'Our goal is to improve the education standards of the state of Bihar by the year of 2025.',
      },
    },
  ];
  return (
    <section id='info' className="mb-4">
      <div className='info-container container pt-3'>
        {data.map((x) => {
          return (
            <InfoContent heading={x.content.heading} data={x.content.data} />
          );
        })}
        <div className='container'>
          <div className='info-bg-container'>
            <div className='info-bg-content'>
              <p className="px-3 py-4">
                Our aim is to strengthen these young budding minds and help in
                their learning process, decision making and creating an
                environment where children are ready to participate more
                willingly than a compulsion. Our vision is to enlighten each and
                every child with the seed of how important education is, so that
                they may prioritise their own education before anything.
              </p>
            </div>
            <div className='info-bg-image'>
              <img src={Info_bg} alt='info-bg' className='info-bg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infopage;

//

// We work to educate the rural section of the society. Our aim is to seed the motivation and will among the students to study and attend schools and use their knowledge to brighten up their future and explore all the opportunities which are possible.

// WHAT DO WE DOING

// We are currently working to install computer labs in atleast 5 schools in the state of Bihar. We are starting this small initiative of our’s by teaching the basics of computers to children.

// GOALS
// Our goal is to improve the education standards of the state of Bihar by the year of 2025.
