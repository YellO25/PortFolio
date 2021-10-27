import React from 'react';
import '../../Styles/Activity.css';

const Activity = ({ image, link, icon, txt }) =>
{
    console.log(txt);
    return (
        <div className="Act-container">
            <div className="act-browser">
                <div className="act-circle"></div>
                <div className="act-circle"></div>
                <div className="act-circle"></div>
                <strong className="icons">{icon}</strong>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="info" className="act-img" />
            </a>
            <h2 className="txt">{txt}</h2>
        </div>
    );
}; export default Activity;
