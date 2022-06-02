import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,useHistory } from 'react-router-dom';
import './Navbar.css';
import firebase from 'firebase/compat';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    let history = useHistory();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            history.push("/sign-in");
        }).catch((error) => {
            // An error happened.
        });
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/homepage' className='navbar-logo' onClick={closeMobileMenu}>
                        Yellow Pages
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/homepage' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/add-business'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Add a Business
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/search'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Log Out
                            </Link>
                        </li>
                    </ul>
                    {button && <Button onClick={handleLogout}  buttonStyle='btn--outline'>LOG OUT</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
