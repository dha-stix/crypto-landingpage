import { IconButton } from '@mui/material'
import React, {useState} from 'react'
import logo from "../assets/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';

const Nav = () => {
    const [showHamburgerNav, setShowHamburgerNav] = useState(false)

    function setHamburgerFalse() {
        setShowHamburgerNav(false)
    }

    return (
        <div className="nav__container relative">
            <nav className="w-full bg-green-900 h-16 flex items-center justify-between p-7 sticky top-0 z-10">
                <img src={logo} alt="Logo"/>
                
                <ul className="text-white flex text-sm nav__links">
                    <li>
                        <a href="#" className="mr-7 text-green-100 cursor-pointer">
                        Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-7 text-green-100 cursor-pointer ">
                        About Us
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-7 text-green-100 cursor-pointer">
                        Trade
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-7 text-green-100 cursor-pointer ">
                        Contact Us
                        </a>
                    </li>
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
                            <p className="text-xl text-white absolute z-20 rounded p-3 cursor-pointer right-14 top-0 hover:bg-green-600"
                                onClick={setHamburgerFalse}>
                                X
                            </p>

                            <ul className="w-full text-white text-sm flex flex-col p-7 justify-center items-end mt-7"> 
                                <li className="mb-3">
                                    <a href="#" className="mr-7 text-green-100 cursor-pointer  hover:text-white">
                                        Home
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="#" className="mr-7 text-green-100 cursor-pointer hover:text-white">
                                    About Us
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="#" className="mr-7 text-green-100 cursor-pointer hover:text-white">
                                    Trade
                                    </a>
                                </li>

                                <li className="mb-3">
                                    <a href="#" className="mr-7 text-green-100 cursor-pointer hover:text-white">
                                    Contact Us
                                    </a>
                                </li>
                            </ul>
                                
                        </div>

                </Fade>
                )}
                
        </div>
    )
}

export default Nav
