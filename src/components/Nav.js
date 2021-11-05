import { IconButton } from '@mui/material'
import React, {useState} from 'react'
import logo from "../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';
import { Link} from "react-scroll";

const Nav = () => {
    const [showHamburgerNav, setShowHamburgerNav] = useState(false)

    function setHamburgerFalse() {
        setShowHamburgerNav(false)
    }

    return (

        <div className="nav__container">

            <nav className="w-full bg-green-900 h-16 flex items-center justify-between p-7 sticky top-0 z-10">
                <img src={logo} alt="Logo"/>
        
                <ul className="text-white flex text-sm nav__links">
                    
                    <Link 
                        className="mr-7 text-green-100 cursor-pointer hover:text-white"  activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={500}
                    >
                        Home
                    </Link>

                    <Link 
                        className="mr-7 text-green-100 cursor-pointer hover:text-white"  activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}
                    >
                        About Us
                    </Link>

                    <Link 
                        className="mr-7 text-green-100 cursor-pointer hover:text-white"  activeClass="active" to="trade" spy={true} smooth={true} offset={-70} duration={500}
                    >
                        Trade
                    </Link>
                    <Link 
                        className="mr-7 text-green-100 cursor-pointer hover:text-white"  activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}
                    >
                        Contact Us
                    </Link>
                </ul>

                <div className="hamburgerDiv">
                    <IconButton onClick={() => setShowHamburgerNav(true)}>
                        <MenuIcon fontSize="large" className="text-gray-100 text-2xl"/>
                    </IconButton>
                </div>
            </nav>

            
                {showHamburgerNav && (
                    <Fade right>
                        <div className="absolute bg-green-900 w-full z-10">
                            <p className="text-xl text-white absolute z-20  p-3 cursor-pointer right-14 top-0 hover:text-green-200"
                                onClick={setHamburgerFalse}>
                                X
                            </p>

                            <ul className="w-full text-white text-sm flex flex-col p-7 justify-center items-end mt-7"> 
                                <Link 
                                    className="mr-7 text-green-100 cursor-pointer mb-3 hover:text-white" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}
                                    onClick={setHamburgerFalse}
                                >
                                    Home
                                </Link>

                                <Link 
                                    className="mr-7 text-green-100 cursor-pointer mb-3 hover:text-white" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}
                                    onClick={setHamburgerFalse}
                                >
                                    About Us
                                </Link>

                                <Link 
                                    className="mr-7 text-green-100 cursor-pointer mb-3 hover:text-white" activeClass="active" to="trade" spy={true} smooth={true} offset={-70} duration={500}
                                    onClick={setHamburgerFalse}
                                >
                                    Trade
                                </Link>

                                <Link 
                                    className="mr-7 text-green-100 cursor-pointer mb-3 hover:text-white" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}
                                    onClick={setHamburgerFalse}
                                >
                                    Contact Us
                                </Link>
                            </ul>
                                
                        </div>

                </Fade>
                )}
                
        </div>
    )
}

export default Nav
