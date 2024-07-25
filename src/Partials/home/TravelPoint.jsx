import React from 'react';
import travelpoint from "../../assets/images/Group 9238.png"
const TravelPoint = () => {
    return (
        <section className='grid lg:grid-cols-5'>
            <div className='lg:col-span-3'>
                <img src={travelpoint} alt="" />
            </div>
            <div className='lg:mr-28 mt-5 px-5 text-justify lg:col-span-2'>
                <h4 className='text-primary '>Travel Point</h4>
                <h2 className='my-6'>We helping you find your dream location</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

                <div className='mt-10'>
                    <div className='grid grid-cols-2 gap-5 lg:gap-10 '>
                        <div className='border lg:w-[200px]  lg:h-[150px] text-center p-5 rounded-3xl flex-col items-center justify-center flex'>
                            <h3 className='text-tertiary'>500+</h3>
                            <p className='text-black my-2'>Holiday Package</p>
                        </div>

                        <div className='border lg:w-[200px]  lg:h-[150px] text-center p-5 rounded-3xl flex-col items-center justify-center flex'>
                            <h3 className='text-tertiary'>100</h3>
                            <p className='text-black my-2'>Luxury Hotel</p>
                        </div>
                    </div>

                    {/* 2nd row-------------- */}
                    <div className='grid grid-cols-2 gap-5 lg:gap-10 mt-4'>
                        <div className='border lg:w-[200px]  lg:h-[150px] text-center p-5 rounded-3xl flex-col items-center justify-center flex'>
                            <h3 className='text-tertiary'>10</h3>
                            <p className='text-black my-2'>Premium Airlines</p>
                        </div>

                        <div className='border lg:w-[200px]  lg:h-[150px] text-center p-5 rounded-3xl flex-col items-center justify-center flex'>
                            <h3 className='text-tertiary'>5k+</h3>
                            <p className='text-black my-2'>Happy Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelPoint;