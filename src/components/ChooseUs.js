import React from 'react'
import array from "../array"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate'

const ChooseUs = () => {
    
    return (
        <div className="clients w-full py-14 pr-7 pl-7 bg-green-600" id="trade">
            <Fade left>
                <h2 className="text-yellow-400 text-3xl mb-7 text-center">Why Choose Us?</h2>
            </Fade>

            <div className=" w-full beneficiary__lists flex items-center justify-center flex-wrap">
                {
                    array.map(item => (
                        <Rotate key={item.name} delay={700}>
                            <div className="beneficiary bg-gray-100 cursor-pointer w-1/3 m-3 rounded-lg p-7" >
                                <div className="w-full flex items-center mb-4">
                                    <img src={item.image_url} alt={item.alt} className="mr-3 h-10"/>
                                    <h3>{item.name}</h3>
                                </div>
                                <p className="text-sm">
                                    Crypto makes it safe and easy for you to trade Bitcoin. Find the best offers below and buy Bitcoin using Bank Transfers in just 5 simple steps.
                                </p>
                            </div>
                        </Rotate>
                    ))
                }
                
            </div>

            <Zoom bottom delay={300}>
                <div className="ready w-full bg-gray-100 rounded-lg mt-14 flex items-center justify-between p-10">

                    <div className="ready__text">
                        <h2 className="text-2xl text-yellow-500 mb-4">Are you ready to finance the future?</h2>
                        <p  className="text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    
                    <div className="ready__btn">
                        <button className="cta__btn bg-gray-100 p-3 mt-7 text-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition-all duration-500 border-none outline-none shadow shadow-lg">GET STARTED</button>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default ChooseUs
