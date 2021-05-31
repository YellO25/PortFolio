import React from 'react';
import '../Styles/Banner.css';
// import blanc from '../assets/blanc.jpeg';
// import Menus from './Menus';
import { MdDeveloperMode } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { FaSnapchat } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import { IoIosContact } from 'react-icons/io';
import SideList from "./SideList";

import { FaBars } from 'react-icons/fa';


const Banner = (props) =>
{


    const name = "X-DEV";
    return (<div className="banner">
        {/* <img src={Elogo} alt="" id="logo-icon" /> */}

        {/* <Router>
            <Switch>
                <Link to="/List"><FaBars id="list-bar" /></Link>
            </Switch>
            <Route path="/list">
                <SideList />
            </Route>
        </Router>; */}
        <MdDeveloperMode className="logo-icon" />
        <h1 className="top-name">{name}</h1>
        <div className="follow-App">
            <Router>
                <Switch>
                    <Link to="facebook"><FaFacebook className="icon-follow" /></Link>
                </Switch>
                <Switch>
                    <Link to="instagram"><FaInstagramSquare className="icon-follow" /></Link>
                </Switch>
                <Switch>
                    <Link to="TikTok"> <SiTiktok className="icon-follow" /></Link>
                </Switch>
                <Switch>
                    <Link to="Snapchat"><FaSnapchat className="icon-follow" /></Link>
                </Switch>

                <Switch>
                    <Link to="Discord"> <FaDiscord className="icon-follow" />  </Link>
                </Switch>
                <Switch>
                    <Link to="Youtube">  <FaYoutube className="icon-follow" /></Link>
                </Switch>
            </Router>

        </div>


    </div>);
}; export default Banner;