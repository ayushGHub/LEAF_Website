import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();
  const [current, setCurrent] = useState(history.location.pathname);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleClick = (link) => {
    setCurrent(link);
    setIsNavCollapsed(!isNavCollapsed);
  };

  const menuItems = [
    {
      key: 'home',
      item: 'Home',
      link: '/',
    },
    {
      key: 'info',
      item: 'Info',
      link: '/info',
    },
    {
      key: 'vision',
      item: 'Vision',
      link: '/vision',
    },
    {
      key: 'about',
      item: 'About',
      link: '/about',
    },
    {
      key: 'team',
      item: 'Team',
      link: '/team',
    },
    {
      key: 'impact',
      item: 'Impact',
      link: '/impact',
    },
    {
      key: 'contact',
      item: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <div className='logo'>
            <img className='logo__img' src={Logo} alt='logo' />
          </div>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? 'collapse' : ''
          } navbar-collapse navanimate`}
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav ms-auto'>
            {menuItems.map((menuItem) => (
              <li className='nav-item' key={menuItem.key}>
                <Link
                  className={`nav-link ${
                    current === menuItem.link && 'active'
                  }`}
                  aria-current='page'
                  to={menuItem.link}
                  onClick={() => handleClick(menuItem.link)}
                >
                  {menuItem.item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
