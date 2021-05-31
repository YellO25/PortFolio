import React from "react";
import '../Styles/Footer.css';
import ContactsIcon from '@material-ui/icons/Contacts';
import { BiMailSend } from "react-icons/bi";
import { MdDevicesOther } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
const Footer = () =>
{
    return <div className="footer">

        <h4 className="slogan"> with  X-WEB-Digital.All Visible </h4>

        <div className="container-item">

            <div className="item">
                <form className="contact-form">


                    <input type="email" placeholder="x-web2021@gmail.com" className="contact" />
            &nbsp;  &nbsp;
       <button className="contact"><BiMailSend /></button>
                </form>
            </div>
            <div className="item">
                <ul className="explain">
                    <li>< MdDevicesOther style={{ color: "red" }} /> &nbsp;Création sites-web et Applications Mobiles </li>
                    <li><FaUserGraduate style={{ color: "red" }} />&nbsp;Formations Disponibles </li>
                    <li><RiMoneyDollarBoxFill style={{ color: "red" }} />&nbsp;Online-Business Création</li>
                </ul>
            </div>
        </div>
        <p style={{ color: "red", textAlign: "center" }}>&copy; 2021 X-web-developer</p>
    </div>;
}; export default Footer;