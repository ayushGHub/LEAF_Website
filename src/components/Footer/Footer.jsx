import './Footer.css';

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>COPYRIGHT &copy; {currYear} LEAF. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
