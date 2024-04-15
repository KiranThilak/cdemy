import React from 'react';
import LottieAnimation from '../assets/animation/LottieAnimation';
import academyhome_animation from '../assets/animation/academyhome_animation.json';

const AcademyHome = () => {
    return (
        <div className='min-w-screen h-auto flex items-center justify-center'>
            <div className='max-w-screen-lg p-8'>
                <h1 className='text-3xl font-bold mb-4'>Welcome to Academy Home</h1>
                <LottieAnimation animationData={academyhome_animation} className="w-full h-auto" /> {/* Add Tailwind CSS classes for height and width */}
            </div>
        </div>
    );
};

export default AcademyHome;



