import React from 'react';
// import DevicesIcon from '@material-ui/icons/Devices';
import { FaUserGraduate } from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';
import { MdDevicesOther } from 'react-icons/md';
import { GiBiceps } from 'react-icons/gi';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../Styles/Menus.css';
import CreateApp from '../LinkRoutes/CreateApp';

const Menus = () =>
{
    return (
        <div className="menu-bar">
            <h3 className="title-services">DIGITAL-IDEA-SERVICES</h3>
            <Router>
                <ul className="menu">
                    <Switch >
                        <Link to="Creation" className="create-link">
                            <MdDevicesOther className="menu-icons" />
                            <p className="details">WEB<span style={{ color: 'red' }}>&</span>MOBILES</p>
                        </Link>
                    </Switch>
                    <Switch>
                        <Link to="E-BUSINESS" className="create-link">
                            <RiMoneyDollarBoxFill className="menu-icons" />
                            <p className="details">E-BUSINESS</p>
                        </Link>
                    </Switch>
                    <Switch>
                        <Link to="LEARN" className="create-link">
                            <FaUserGraduate className="menu-icons" />
                            <p className="details">FORMATIONS</p>
                        </Link>
                    </Switch>
                    <Switch>
                        <Link to="LEARN" className="create-link">
                            <GiBiceps className="menu-icons" />
                            <p className="details">COMPETENCES</p>
                        </Link>
                    </Switch>
                    <Switch>
                        <Link to="PROJETS" className="create-link">
                            <MdDoneAll className="menu-icons" />
                            <p className="details">PROJETS DONE</p>
                        </Link>
                    </Switch>
                </ul>
                <Route>
                    <CreateApp />
                </Route>
            </Router>
        </div>);
}; export default Menus;