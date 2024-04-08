import React from 'react';
import cdemy_home from '../assets/images/cdemy_home.jpg';
import CardSection from './CardSection';

const CdemyHome = () => {
  
    
    return (
        <div className='w-full inline-block'>
            <article className='flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh] m-8'>
                <div className='absolute top-0 left-0 bottom-0 right-0 h-full rounded-3xl z-0 ' />
                <img
                 src={cdemy_home}
                 alt="cdemy image"
                 className='w-full h-full object-center object-cover rounded-3xl -z-10'
                 />

           
            </article>
            <CardSection/>
        </div>
    );
};

export default CdemyHome;
