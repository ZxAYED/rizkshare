import { useEffect } from 'react';
import img from '../../images/about.jpg'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const AboutUS = () => {





    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="about-us-container"
            >


                <div className="relative w-full h-[85vh]  ">

                    <div

                        className="absolute w-full h-full "
                    >
                        <img
                            src={img}

                            className="w-full h-full object-fit rounded-lg"
                        />
                        <div className='absolute top-0  justify-center items-center  px-[20%] flex flex-col  text-center h-full bg-gradient-to-r mx-auto from-[#0c0c0c] to-[#0c0c0c94]    p-6'>
                            <h1 className='md:text-4xl text-2xl font-bold text-white py-2'>
                                <span className='text-[#E7CBCB] text-5xl'>About Us</span> <br /> <br /> Get to Know Us
                            </h1>
                            <p className='text-white pb-5 pt-5 md:text-lg'>  We are a passionate team dedicated to making a positive impact in our community through food sharing and donations.   Our mission is to reduce food waste, nourish those in need, and build a stronger, more connected society.</p>
                            <p className='text-white'>Our commitment to sustainability drives us to find innovative ways to make a difference, one meal at a time.
                            </p>
                            <p className='pb-4 text-white'>
                                Join us in our mission and become part of the RizkShare community dedicated to creating a world where no one goes to bed hungry.
                            </p>

                            <div className="">
                               <Link to='/RizkShare/News'> <button className="btn hidden mt-10 lg:flex bg-[#99627A] border-none w-fit text-white hover:text-[#99627A]">Contact now !</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};










export default AboutUS;