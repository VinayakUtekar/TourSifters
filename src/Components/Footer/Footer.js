import React from "react";
import "./Footer.css";
import video2 from '../../Media/Footer-video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {FiChevronRight} from "react-icons/fi"

const Footer = () =>{
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>Let's Explore World</small>
                        <h2>Take a journey with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address" />
                        <button className="btn flex" type="submit">
                            SEND<FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv flex">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/>    TourShifters.
                            </a>
                        </div>
                        <div className="footerParagraph">
                            Explore the world with TourShifters, your ultimate travel companion. 
                            Our passion for wanderlust and commitment to seamless adventures 
                            drive us to curate unforgettable journeys for you. From idyllic beach 
                            escapes to thrilling mountain expeditions, we've got you covered. Let 
                            your dreams take flight and embark on a transformative travel experience 
                            with TourShifters. Your next adventure awaits! Book now and shift your 
                            perspective on travel. Bon voyage!
                        </div>

                        <div className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <AiFillFacebook className="icon"/>
                        </div>
                    </div>
                    <div className="footerLinks">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;