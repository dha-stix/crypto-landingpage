import React from 'react'
import p2p from "../assets/bitcoinp2p.svg"
import Fade from 'react-reveal/Fade';

const ReferEarn = () => {
    return (
        <div className="referEarn w-full py-14 pr-7 pl-7 mt-10">

            <Fade left>
                <h2 className="text-yellow-400 text-3xl mb-3 text-center">Share & Earn 💰</h2>
            </Fade>

            <div className="referContainer flex items-center mt-7">
                <Fade bottom delay={700}>
                    <div className="refer__img w-full h-full p-7 mr-5">
                        <img src={p2p} alt="Refer & Earn"/> 
                    </div>
                </Fade>

                <Fade bottom delay={700}>
                    <div className="refer__text pr-10">

                        <p className="text-gray-200 tracking-wide mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>

                        <p  className="text-gray-200 tracking-wide mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>

                        <button className="refer__ctaBtn bg-gray-100 p-3 mt-3 text-gray-900 rounded hover:bg-yellow-500 transition-all duration-500 border-none outline-none shadow shadow-lg">
                            CREATE AN ACCOUNT
                        </button>
                    </div>
                </Fade>
          
            </div>
        </div>
    )
}

export default ReferEarn
