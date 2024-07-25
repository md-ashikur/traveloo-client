import React from 'react';
import PopularDestination from './FindDestination';

const DiscoverBody = () => {
    return (
        <div className=' my-20'>
           <div className='discover-pic lg:h-[80vh] h-52 flex flex-col  justify-center text-white px-5 lg:px-20 text-center'>
           <h1 className='lg:text-4xl text-2xl font-bold'>The World is Waiting For You</h1>
            <p className='text-white'>Discover amzaing places at exclusive deals</p>
           </div>

           <PopularDestination/>
        </div>
    );
};

export default DiscoverBody;