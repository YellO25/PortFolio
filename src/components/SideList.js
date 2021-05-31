// import React from 'react';
// import { FaUserGraduate } from 'react-icons/fa';
// import { MdDoneAll } from 'react-icons/md';
// import { MdDevicesOther } from 'react-icons/md';
// import { GiBiceps } from 'react-icons/gi';
// import { RiMoneyDollarBoxFill } from 'react-icons/ri';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import '../Styles/SideList.css';

// const SideList = () =>
// {
//     return (
//         <div className="menu-side">
//             <Router>
//                 <ul className="side-list">
//                     <Switch >
//                         <Link to="Creation" className="side-link">
//                             <MdDevicesOther className="side-icons" />
//                             <p className="side-details">Web<span style={{ color: 'red' }}>&</span>Mobiles</p>
//                         </Link>
//                     </Switch>
//                     <Switch>
//                         <Link to="E-BUSINESS" className="side-link">
//                             <RiMoneyDollarBoxFill className="side-icons" />
//                             <p className="side-details">E-Business</p>
//                         </Link>
//                     </Switch>
//                     <Switch>
//                         <Link to="LEARN" className="side-link">
//                             <FaUserGraduate className="side-icons" />
//                             <p className="side-details">Formations</p>
//                         </Link>
//                     </Switch>
//                     <Switch>
//                         <Link to="LEARN" className="side-link">
//                             <GiBiceps className="side-icons" />
//                             <p className="side-details">Compétences</p>
//                         </Link>
//                     </Switch>
//                     <Switch>
//                         <Link to="PROJETS" className="side-link">
//                             <MdDoneAll className="side-icons" />
//                             <p className="side-details">Projets Done</p>
//                         </Link>
//                     </Switch>
//                 </ul>
//                 <Route>

//                 </Route>
//             </Router>
//         </div>);
// }; export default SideList;