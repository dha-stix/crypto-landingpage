import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PaidIcon from '@mui/icons-material/Paid';
import Fade from 'react-reveal/Fade';

const WorkWithUs = () => {
    return (
        <section className="w-full bg-green-900 p-9  mt-10">
            <Fade left>
                <h2 className="text-center text-yellow-400 text-3xl">
                How to Earn with Us
                </h2>
            </Fade>


            <div className="workContainer w-full flex items-center justify-between mt-7">

                <Fade bottom delay={700}>
                    <div 
                        className="workItems bg-green-800 w-1/3 p-7  rounded-lg mr-3 flex flex-col items-center justify-center cursor-pointer hover:bg-green-700 hover:shadow-lg">

                        <LockOpenIcon fontSize="large" className="text-green-200 mb-3 flex flex-col items-center justify-center"/>
                        <h3 className="text-lg text-gray-200   mb-2">Create an account</h3>
                        <p className="text-justify text-sm opacity-80">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         </p>
                    </div>
                </Fade>

                <Fade bottom delay={700}>
                    <div 
                        className="workItems bg-green-800 w-1/3 p-7 rounded-lg mr-3  flex flex-col items-center justify-center cursor-pointer hover:bg-green-700 hover:shadow-lg">
                        <LeaderboardIcon fontSize="large" className="text-green-200  mb-3"/>
                        <h3  className="text-lg text-gray-200 mb-2">Sign in to your Dashboard</h3>
                        <p className="text-justify text-sm opacity-80">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                    </div>
                </Fade>

                <Fade bottom delay={700}>
                    <div 
                        className="workItems bg-green-800 w-1/3 p-7 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-green-700 hover:shadow-lg">
                        <PaidIcon fontSize="large" className="text-green-200  mb-3"/>
                        <h3  className="text-lg text-gray-200 mb-2">Get paid</h3>
                        <p className="text-justify text-sm opacity-80">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default WorkWithUs
