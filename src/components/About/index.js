import React from 'react';
import "../../Styles/About.css";
import metoo from '../../assets/metoo.jpg';
import infos from '../../assets/infos.jpg';

const About = () =>
{
    return (
        <div className="About">
            {/* left Side */}
            {/* <h2 className="a-title">About me</h2> */}
            <div className="a-container">
                <div className="about-left">
                    <div className="about-bg"></div>
                    <div className="container-card">
                        <img src={metoo} alt="" className="about-img" />
                    </div>
                </div>
                {/* container right side */}
                <div className="about-right">
                    <h1 className="a-title">A Propos</h1>
                    <div className="sub-des">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nulla dolorum in animi quasi laudantium!
                    </div>

                    <div className="a-description">
                        <p className="text-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates odio delectus perferendis ex possimus magni distinctio vel dolor aliquam iure, voluptate maxime reprehenderit architecto facere asperiores, nesciunt accusamus, culpa incidunt ut! Laboriosam, molestias nihil accusantium fugiat ex ipsum itaque
                            porro consequuntur nostrum rem aliquam est!
                        </p>
                        <div className="des-container">
                            <img src={infos} alt="infos" className="des-image" />
                            <div className="text-image-des">
                                <h4 className="sub-title" data-anijs="if: mouseover, on: body, do: swing animated">Tout en JavaScript</h4>
                                <p className="text-image">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, repellendus!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, repellendus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default About;
