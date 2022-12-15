import React from 'react';
import Logo from '../images/logo.png';
import Burger from '../images/burger.png';
const Navbar = () => {
  return (
    <div className='container-fluid app-navbar'>
            <div className='row row-padding align-items-center p-4'>
                <div className='col-3'>
                    <div>
                        <img alt='' className='logo' src={Logo} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className=''>
                        <ul className='nav justify-content-evenly align-items-center'>
                            <li className='nav-item'><a className='nav-link'>HOME</a></li>
                            <li className='nav-item'><a className='nav-link'>ABOUT</a></li>
                            <li className='nav-item'><a className='nav-link'>COURSES</a></li>
                            <li className='nav-item'><a className='nav-link'>BLOG</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-3'>
                <div className=''>
                        <ul className='nav justify-content-between align-items-center'>
                            <li className='nav-item'><button className='btn btn-light text-dark'>SIGNIN</button></li>
                            <li className='nav-item'><span className='nav-link'><img alt='' className='burger' src={Burger} /></span></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar