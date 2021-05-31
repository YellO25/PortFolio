import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Menus from './components/Menus';
import Footer from './components/Footer';
// // import SideList from "./components/SideList";
// import { ImCross } from 'react-icons/im';
// import { FaBars } from 'react-icons/fa';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App ()
{

  return (<div className="App">
    <Banner />
    <Menus />
    <Footer />
  </div>);
};

export default App;