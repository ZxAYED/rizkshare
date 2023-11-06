
import { useState, useEffect } from 'react';

const Banner = () => {


    const images = [
      'https://i.ibb.co/ZxMsgX0/beef.jpg',
      'https://i.ibb.co/T2FnYs2/banner-1.jpg',
      'https://i.ibb.co/JcVMqMB/food-1.webp',
    ];
    
    

      const [currentIndex, setCurrentIndex] = useState(0);
    
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); //
    
    
        return () => clearInterval(interval);
      }, []);
         return (
           <div>
           <div className="relative w-full h-[85vh] mb-10 ">
             {images.map((image, index) => (
               <div
                 key={index}
                 className={`absolute w-full h-full transition-opacity  duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                   }`}
               >
                 <img
                   src={image}
                   alt={`Slide ${index}`}
                   className="w-full h-full object-fit rounded-lg"
                 />
                 <div className='absolute top-0  justify-center items-center  px-[20%] flex flex-col  text-center h-full bg-gradient-to-r mx-auto from-[#151515] to-rgba(21, 21, 21, 0.00)   p-6'>
                    <h1 className='md:text-4xl text-2xl font-bold text-white py-2'>
                   <span className='text-[#E7CBCB] text-5xl'>RizkShare </span> <br /> <br /> Nourishing Hearts, Uniting Communities
                    </h1>
                    <p className='text-white pb-5 pt-5 md:text-lg'>RizkShare is where benevolence meets community. We bring people together to share surplus food, nourishing both hearts and the environment. Join us in making a positive impact, one meal at a time.</p>
                  
                    <div className="">
                    <button className="btn hidden lg:flex bg-[#99627A] border-none w-fit text-white hover:text-[#99627A]">Help us grow</button>
                </div>
                 </div>
               </div>
             ))}
             </div>
           </div>
         );
       };
    
    
    
    

    
    
    


export default Banner;