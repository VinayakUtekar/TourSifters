import React, {useState} from "react";
import "./NavBar.css";
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const NavBar = () =>{
    const [active, setActive] = useState('navBar')

    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    const removeNav = () =>{
        setActive('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo fex">
                        <h1><MdOutlineTravelExplore className="icon"/>  TourShifters.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className="closeNavBar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavBar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default NavBar;
