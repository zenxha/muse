import {Link} from 'react-router-dom';
import { useState } from 'react';
import './NewNavStyle.css';

export function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return(
        <div className='Nav-cover'>
            <div className='Nav-root-shadow'>
                <div className='Nav-in-cover'>
                    <div className='Nav-root'>
                        <h2 className='Nav-icon'>{"🎹"}</h2>
                        <Link to='/' className='Nav-text' style={{marginRight: '25px'}}> {"MUSE"} </Link>
                        <div className="Nav-multibox-root">
                            <button className='Nav-btn'>
                                About
                            </button>
                            <button className='Nav-btn'>
                                Pricing
                            </button>
                            <button className='Nav-btn'>
                                BLOG
                            </button>
                        </div>
                        <div className="Nav-dropdown">
                            <button className="Nav-btn-drop" onClick={toggleDropdown}>
                                <div className="Nav-btn-icon">
                                    U
                                </div>
                                <span className="Nav-span">
                                </span>
                            </button>
                            {isDropdownOpen ?
                                <div className="Nav-dropdown-container">
                                    <ul className="Nav-dropdown-list">
                                        <li className='Nav-list-item'>Profile</li>
                                        <li className='Nav-list-item'>Account</li>
                                        <li className='Nav-list-item'>Dashboard</li>
                                        <Link to='/login' style={{textDecoration:'none'}}>
                                            <li className='Nav-list-item' style={{ color: 'white' }}>
                                                Logout
                                            </li>
                                        </Link>
                                    </ul> 
                                </div>
                                :
                                <></>
                            }
                        </div>
                    </div>          
                </div>
            </div>
        </div>
    );
}