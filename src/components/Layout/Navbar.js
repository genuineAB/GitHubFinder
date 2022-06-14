import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({meme, title}) => {
 
    return (
      <div className='navbar bg-primary'> 
        <h1>
            <i className={meme} /> {title}</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    )
  
}
Navbar.defaultProps = {
  title: 'Github Finder',
  meme: 'fab fa-github'

};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  meme: PropTypes.string.isRequired
}

export default Navbar
