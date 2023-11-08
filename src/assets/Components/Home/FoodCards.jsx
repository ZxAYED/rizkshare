
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect } from "react";



const FoodCards = ({ items }) => {
    const { additionalNotes, expiredDateInDays, foodDonatorEmail, foodDonatorImage, foodDonatorName, foodImage, foodName, foodQuantity, pickupLocation, _id, } = items

    useEffect(()=>{
        <script>
        AOS.init();
      </script>
    },[])
    return (

        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="">
            <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
            >
                
                <div className="max-w-2xl  overflow-hidden rounded-xl shadow-2xl ">
                    <img className="object-cover  w-full h-64" src={foodImage} alt="Article" />

                    <div className="p-6 ">
                        <div>
                            <span className="text-xl font-black hover:text-gray-400  uppercase ">{foodName}</span>
                            <p className="my-2 text-lg transition-colors duration-300 transform "  >{additionalNotes}</p>
                            <p className="mt-4 ">Pick Up location:<span className="text-yellow-600"> {pickupLocation}</span> </p>


                        </div>

                        <div className="mt-9">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={foodDonatorImage} alt="Avatar" />
                                    <a href="#" className="mx-5 font-semibold " role="link">{foodDonatorName}</a>
                                </div>
                                <span className="mx-1 text-xs ">{foodDonatorEmail}</span>

                            </div>
                            <div className="flex gap-8 text-left justify-center items-center">
                                <p className="mt-2 ">Total Quantity: <span className="text-yellow-600">{foodQuantity}  </span> </p>
                                <p className="mt-2 ">Expired Date: <span className="text-yellow-600">{expiredDateInDays}  days</span> </p>
                            </div>
                            <div className="pt-8">
                                <Link to={`/RizkShare/${_id}`}>
                                    <button className="btn bg-[#99627A] border-none text-white hover:text-[#99627A]">view detials</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div >
        </div>
    );
};

export default FoodCards;