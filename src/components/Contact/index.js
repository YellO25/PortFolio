import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../../Styles/Contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import map from '../../assets/map.png';
import negociate from '../../assets/negociate.png';


const Contact = () =>
{
    const formRef = useRef();
    const [message, setMessage] = useState(false);

    const handleSubmit = e =>
    {
        e.preventDefault();
        emailjs.sendForm(
            'service_pwar8pl',
            "template_dfhdvb7",
            formRef.current,
            'user_K0coIvuhwEr3I2OSmtyei')
            .then((result) =>
            {
                console.log(result.text);
                setMessage(true);
            },

                (error) =>
                {
                    console.log(error.text);
                })
            .then(() =>
            {
                formRef.current = "";
            });
    };

    return (
        <div className="contact-container">

            <div className="contact-bg"></div>

            <div className="contact-wrapper">
                <div className="contact-left">
                    <h2 className="contact-title">Et si, nous Discutions de votre Projet</h2>
                    <div className="contact-infos">
                        <div className="info-item">
                            <img
                                src={phone}
                                alt=""
                                className="i-icon" />
                            +330753585268
                        </div>
                        <div className="info-item">
                            <img
                                src={email}
                                alt=""
                                className="i-icon" />
                            yellodigi21@gmail.com
                        </div>
                        <div className="info-item">
                            <img
                                src={map}
                                alt=""
                                className="i-icon" />
                            France à la demane
                        </div>
                    </div>
                    <div className="i-massage">
                        <img
                            src={negociate}
                            alt=""
                            className="i-nego" />
                    </div>

                </div>
                {/* right Side */}
                <div className="contact-right">
                    <p className="form-des">
                        <b style={{ "font-size": "25px", "margin": "0px" }}>Avez-vous un projet ?</b>
                        Si oui , un formulaire professionel est à votre disposition 24/7j , pour prendre en compte vos requètes, et repondre à vos besoins.
                    </p>
                    <div className="f-container">
                        <form className="f-champ" ref={formRef} onSubmit={handleSubmit}>
                            <div className="f-input">
                                <input type="text" name="user_subject" placeholder="Name" />
                                <label htmlFor="name" className="f-label">Subject</label>
                            </div>
                            <div className="f-input">
                                <input type="text" name="user_name" placeholder="A propos" />
                                <label htmlFor="name" className="f-label">Name</label>
                            </div>
                            <div className="f-input">
                                <input type="email" name="user_email" placeholder="E-mail" />
                                <label htmlFor="email" className="f-label">Email</label>
                            </div>
                            <div className="f-input">
                                <textarea rows="6" name="message" placeholder="message" />
                                <label htmlFor="message" className="f-label">Messge</label>
                            </div>
                            <button>Envoyez</button>
                            <h3 style={{ 'fontFamily': "sans-serif", 'fontSize': "20px", "color": "blue" }}>{message && "Merci pour votre message"}</h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default Contact;
