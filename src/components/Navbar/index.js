import React, { useState } from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnkLink, NavBtnkLink1} from './NavbarElements'
import Dropdown from '../Dropdown/dropdown'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Signinform from '../../pages/signinform'
import Signupform from '../../pages/signupform'
import logo from '../../media/logo.png'
import notif from '../../media/notif.png'
import order from '../../media/order.png'
import message from '../../media/message.png'
import Searchbar from '../Searchbar/searchbar'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={logo} alt="Logo" height="65"/>
            </NavLink>
            <Bars/>
            <NavMenu>
                <Dropdown></Dropdown>
                <Searchbar></Searchbar>
                <NavLink to="/notification" activeStyle>
                    <img src={notif} alt="Logo" height="23"/>
                </NavLink>
                <NavLink to="/order" activeStyle>
                    <img src={order} alt="Logo" height="24"/>
                </NavLink>
                <NavLink to="/message" activeStyle>
                    <img src={message} alt="Logo" height="27"/>
                </NavLink>
            </NavMenu>
            <NavMenu>
                <NavBtn>
                    <Popup trigger={<NavBtnkLink to="/sign-up">Sign Up</NavBtnkLink>} modal nested>
                                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> Sign Up </div>
                        <div className="content">
                            <Signupform></Signupform>
                        </div>
                        <div className="actions">
                            <Popup trigger={<button className="button"> Enter </button>} position="top center" nested>
                                <span>
                                MANTAP 
                                </span>
                            </Popup>
                            <button className="button" onClick={() => { console.log('modal closed '); close(); }}> Close </button>
                        </div>
                    </div>
                    )}
                    </Popup>
                </NavBtn>
                <NavBtn>
                    <Popup trigger={<NavBtnkLink1 to="/sign-in">Sign In</NavBtnkLink1>} modal nested>
                                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> Sign In </div>
                        <div className="content">
                        <Signinform></Signinform>
                        </div>
                        <div className="actions">
                            <Popup trigger={<button className="button"> Enter </button>} position="top center" nested>
                                <span>
                                MANTAP 
                                </span>
                            </Popup>
                            <button className="button" onClick={() => { console.log('modal closed '); close(); }}> Close </button>
                        </div>
                    </div>
                    )}
                    </Popup>
                </NavBtn>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;