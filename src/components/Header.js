import React from 'react'
import bitcoin from "../assets/bitcoin.svg"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const Header = () => {
    return (
        <header  className=" header w-full flex items-center justify-between p-9" id="home">

            <div className="header__text flex flex-col mr-3">

                <Fade top delay={200}>
                    <h2 className="header--title text-3xl text-gray-50 mb-3">Get quality leads on coins to purchase</h2>
                </Fade>    
                
                <Fade bottom delay={900}>
                    <h3 
                        className="text-green-300 tracking-wide">Join over <span className="text-yellow-400">10M+</span> users buying and selling 150+ cryptocurrencies at true cost, spend with the Crypto Visa Card and get up to <span className="text-yellow-400">30%</span> back and grow your portfolio by receiving rewards up to 14.5% on your crypto assets.
                    </h3>
                </Fade>

                <Zoom bottom delay={1800}>
                    <button 
                        className="cta__btn bg-gray-100 p-3 mt-7 text-gray-900 rounded hover:bg-yellow-500 transition-all duration-500 border-none outline-none shadow shadow-lg">
                        GET STARTED
                    </button>
                </Zoom>
            </div>
            
            <Zoom right delay={2700}>
                <div className="header__image">
                    <img src={bitcoin} alt="Bitcoin" className="image"/>
                </div>
            </Zoom>
        </header>
    )
}

export default Header
