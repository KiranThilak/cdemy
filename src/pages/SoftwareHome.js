import React from 'react';
import LottieAnimation from '../assets/animation/LottieAnimation';
import softwarehome_animation from '../assets/animation/softwarehome_animation.json';

const AcademyHome = () => {
    return (
        <div className='min-w-screen h-auto flex items-center justify-center'>
            <div className='max-w-screen-lg p-8'>
                <h1 className='text-3xl font-bold mb-4'>Welcome to software Home</h1>
                <LottieAnimation animationData={softwarehome_animation} className="w-full h-auto" /> 
            </div>
            
        </div>
    );
};

export default AcademyHome;