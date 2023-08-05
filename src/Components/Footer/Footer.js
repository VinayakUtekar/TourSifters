import React,{useEffect} from "react";
import "./Footer.css";
import video2 from '../../Media/Footer-video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {FiChevronRight} from "react-icons/fi"
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Let's Explore World</small>
                        <h2>Take a journey with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
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
                        <div data-aos="fade-up" className="footerParagraph">
                            Explore the world with TourShifters, your ultimate travel companion. 
                            Our passion for wanderlust and commitment to seamless adventures 
                            drive us to curate unforgettable journeys for you. From idyllic beach 
                            escapes to thrilling mountain expeditions, we've got you covered. Let 
                            your dreams take flight and embark on a transformative travel experience 
                            with TourShifters. Your next adventure awaits! Book now and shift your 
                            perspective on travel. Bon voyage!
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <AiFillFacebook className="icon"/>
                        </div>
                    </div>
                    <div className="footerLinks grid">

                        {/*Group One*/}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
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

                        {/*Group Two*/}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Booking
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HotelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivage
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>

                        {/*Group Three*/}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Californa
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Asia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Oceania
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>PREFERED TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED--VINAYAK UTEKAR</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
