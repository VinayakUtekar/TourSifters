import React from "react";
import "./Main.css";
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"
import img from '../../Media/img1.jpg'
import img2 from '../../Media/img2.jpg'
import img3 from '../../Media/img3.jpg'
import img4 from '../../Media/img4.jpg'
import img5 from '../../Media/img5.jpg'
import img6 from '../../Media/img6.jpg'
import img7 from '../../Media/img7.jpg'
import img8 from '../../Media/img8.jpg'
import img9 from '../../Media/img9.jpg'

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Experience the City of Love like never before with a Parisian vacation. Explore iconic landmarks, indulge in gourmet cuisine, and embrace the enchanting atmosphere of this timeless destination.'
    },


    {
        id:2,
        imgSrc: img2,
        destTitle: 'Glacier National Park',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Embark on an awe-inspiring adventure at Glacier National Park. Explore pristine wilderness, breathtaking glaciers, and diverse wildlife, creating unforgettable memories amidst natures grandeur and serenity.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Rome',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Journey to the heart of ancient wonders on a Rome vacation. Marvel at iconic ruins, savor delectable Italian cuisine, and immerse yourself in the citys captivating history and culture.'
    },


    {
        id:4,
        imgSrc: img4,
        destTitle: 'Male',
        location: 'Maldives',
        grade: 'CULTURAL RELAX',
        fees: '$400',
        description: 'Experience the vibrant allure of Male on your dream vacation. Discover stunning beaches, rich culture, and exciting water sports, making it a tropical paradise for an unforgettable getaway.'    
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Tokyo',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Get ready to be captivated by Tokyos dynamic energy on your dream vacation. Immerse in modern marvels, ancient traditions, and delectable cuisine for an unforgettable journey through Japans bustling metropolis.'   
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Barcelona',
        location: 'Spain',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Indulge in the vibrant spirit of Barcelona on your dream vacation. Experience architectural wonders, sandy beaches, and a thriving arts scene, making it an enchanting Mediterranean escape like no other.'   
    },

    {
        id:7,
        imgSrc: img7,
        destTitle: 'Dubai',
        location: 'UAE',
        grade: 'CULTURAL RELAX',
        fees: '$400',
        description: 'Experience the epitome of luxury and modernity on a Dubai vacation. Marvel at iconic skyscrapers, indulge in world-class shopping, and enjoy a desert adventure in this glamorous destination.'
    },

    {
        id:8,
        imgSrc: img8,
        destTitle: 'Bali',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$300',
        description: 'Escape to paradise on a Bali vacation. Immerse yourself in breathtaking beaches, lush landscapes, vibrant culture, and rejuvenating spas, creating an idyllic tropical getaway to remember forever.'
   },

    {
        id:9,
        imgSrc: img9,
        destTitle: 'Jaipur',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Step into the vibrant tapestry of Jaipur on an enchanting vacation. Immerse yourself in royal palaces, colorful bazaars, and rich cultural heritage, making it an unforgettable journey into Indias history.'
    }
]

const Main = () =>{
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
                        return(
                            <div key={id} className="singleDestination">
                                {

                                }

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        Details <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;