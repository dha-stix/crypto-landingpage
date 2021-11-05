import React from 'react'
import logo from "../assets/logo.svg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="w-full py-14 pr-7 pl-7 bg-green-900 border-t border-green-700" id="contact"> 

            <div className="footer__container flex justify-between">
                <div>
                    <img src={logo} alt="Logo"/> 
                    <IconButton>
                        <LinkedInIcon fontSize="large" className="text-gray-300"/>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon fontSize="large" className="text-gray-300"/>
                    </IconButton>
                </div>

                <div>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Mode of Payment</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Privacy Policy</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Terms of Use</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Mode of Payment</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Privacy Policy</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Terms of Use</p>
                </div>

                <div>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Available Markets</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Market Cap</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">News Today</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Newsletter</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Coins</p>
                    <p className="text-gray-300 mb-2 cursor-pointer hover:text-green-300">Blog</p>
                </div>
    
            </div>

            <div className="w-full mt-5">
            <p className="text-gray-300 text-center mt-5">Copyright {date}  @Crypto Network 💖</p>
            </div>
        </footer>
    )
}

export default Footer
