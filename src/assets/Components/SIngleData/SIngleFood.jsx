import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from "../Authentication/AuthProvider";



const SIngleFood = () => {
 const {user}=useContext(AuthContext)

    const data = useLoaderData()
    const { additionalNotes, expiredDateInDays, foodDonatorEmail, foodDonatorImage, foodDonatorName, foodImage, foodName, foodQuantity, pickupLocation, _id ,status} = data
    const date=moment().format('llll');
    if(!user){   toast.error(' Please Log in to try for a request', {
        position: "top-right",
        autoClose: 2100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })}
    const  handlePost =e=>{
        e.preventDefault()
        const email =user.email
        const id=_id
        const form =e.target;
        const info =form.donate.value;
        const notes=form.notes.value;
        const donation=form.notes.value;
       const status ='available'
        const requestedFood = { additionalNotes, expiredDateInDays, foodDonatorEmail, foodDonatorImage, foodDonatorName, foodImage, foodName, foodQuantity, pickupLocation, id,info,notes ,date,email  ,donation ,status }
     
       

        axios.post(`https://zayed-rizkshare-server.vercel.app/RizkShare/RequestedFood/`, requestedFood,{withCredentials:true}
          )
          .then(function (response) {
            toast.success('Data has been added', {
                position: "top-right",
                autoClose: 2100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
          })
          .catch(function (error) {
            console.log(error);
            if(!user){   toast.error(error.message, {
                position: "top-right",
                autoClose: 2100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })}
         
          });




        }




    return (
        <div className="max-w-7xl mx-auto mt-6 mb-16">
            <div>
                <div className="max-w-7xl overflow-hidden rounded-xl shadow-2xl ">
                    <img className="object-cover  w-full h-[60vh]" src={foodImage} alt="Article" />

                    <div className="p-6 ">
                        <div>
                            <span className="text-5xl font-black hover:text-gray-400  uppercase ">{foodName}</span>
                            <p className="my-4 text-2xl transition-colors duration-300 transform "  >{additionalNotes}</p>
                            <p className="mt-4 ">Pick Up location:<span className="text-yellow-600"> {pickupLocation}</span> </p>
                            <div className="flex gap-8 text-left justify-between items-center">
                                <p className="mt-2 ">Total Quantity: <span className="text-yellow-600">{foodQuantity}  </span> </p>
                                <p className="mt-2 ">Expired Date: <span className="text-yellow-600">{expiredDateInDays}  days</span> </p>
                            </div>

                        </div>

                        <div className="mt-9">
                            <h1 className="text-2xl font-bold py-5"> Donator information:</h1>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center ">
                                    <img className="object-cover h-20 rounded-full" src={foodDonatorImage} alt="Avatar" />
                                    <a href="#" className="mx-5 text-xl font-semibold " role="link">{foodDonatorName}</a>
                                </div>
                                <p className="  ">Food Donator Email: {foodDonatorEmail}</p>

                            </div>

                            <div className="pt-8">



                               {
                                user?<a href="#my_modal_8" className="btn w-fit bg-[#99627A] flex items-center justify-center mx-auto border-none text-white hover:text-[#99627A]">request</a>:<a href="#my_modal_8" className="btn w-fit bg-[#99627A] flex items-center justify-center mx-auto border-none text-white hover:text-[#99627A] "  disabled>request</a>
                               } 

                                <div className="modal w-full bg-[#99627A] " id="my_modal_8">
                                    <div className="modal-box  max-w-5xl mx-auto ">

                                        <div className="relative  w-full max-h-full">

                                            <div className="relative bg-[#99627A] rounded-lg shadow ">

                                                <div className="px-6 py-6 lg:px-8">
                                                    <h3 className="mb-4 text-xl text-white  text-center font-medium">Want to order the food? </h3>
                                                    <form onSubmit={handlePost}>
                                                        <div className="grid grid-cols-2 gap-5 " >
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donator Email:</label>
                                                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={foodDonatorEmail} disabled />
                                                            </div>
                                                            <div>
                                                                <label name="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donator Name:</label>
                                                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={foodDonatorName} disabled />
                                                            </div>
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name:</label>
                                                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={foodName} disabled />
                                                            </div>
                                                            <div>
                                                                <label name="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Id</label>
                                                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={_id} disabled />
                                                            </div>
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired Date in days & Current date:</label>
                                                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={`${expiredDateInDays} days & ${date}`}   disabled />
                                                            </div>
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" disabled />
                                                            </div>
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes:</label>
                                                                <input type="text" name="notes" placeholder="Type here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                            </div>
                                                            <div>
                                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donate:</label>
                                                                <input type="number" name="donate" placeholder="Please Donate some money" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
                                                            </div>
                                                       
                                                        </div>
                                                        <div className="flex flex-row-reverse gap-10 justify-center  items-center ">
                                                        <div className="modal-action flex flex-row">
                                                            
                                                            <a href="#" className="btn w-fit bg-[#C88EA7]   border-none text-white hover:text-[#99627A]">Close</a>
                                                        </div>
                                                        
                                                        <div><button type="submit" className="btn mt-6 w-fit bg-[#C88EA7]  border-none text-white hover:text-[#99627A]">Submit</button></div></div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <ToastContainer
position="top-right"
autoClose={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
theme="light"
/>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIngleFood;