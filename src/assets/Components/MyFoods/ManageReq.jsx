import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'sweetalert2/src/sweetalert2.scss'

import { useState } from "react";



const ManageReq = () => {
    const datas = useLoaderData()
  const [data,setData]=useState(datas)


    
    const { additionalNotes, expiredDateInDays, foodDonatorEmail, foodDonatorImage, foodDonatorName, foodImage, foodName, foodQuantity, pickupLocation, _id } = data

    
   


    const handleUpdate=id=>{
    
       
          fetch(`http://localhost:5000/RizkShare/RequestedFood/${id}`,{
           method:'PATCH',
           headers:{
              'content-type':'application/json'
           },
         body:JSON.stringify({status: 'delivered'})
           
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
           if(data.modifiedCount >0){
           toast.success('Data has been updated', {
               position: "top-right",
               autoClose: 2100,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               })}
  
               const remaining =data.filter(item =>item._id!==id)
               const updated =data.find(item =>item._id===id);
               updated.status='confirm'
               const newData =[updated ,...remaining]
               setData(newData)
          })
   
          
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
                                <p className="mt-2 ">Request Date <span className="text-yellow-600">{expiredDateInDays}/2023  </span> </p>
                            </div>

                        </div>

                        <div className="mt-9">
                            <h1 className="text-2xl font-bold py-5"> Donator information:</h1>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center ">
                                    <img className="object-cover h-20 rounded-full" src={foodDonatorImage} alt="Avatar" />
                                    <a href="#" className="mx-5 text-xl font-semibold " role="link">{foodDonatorName}</a>
                                </div>
                                <p className="  ">User Email: {foodDonatorEmail}</p>

                            </div>
                            <button className=" bg-[#99627A] p-3 block mx-auto border-none  rounded-xl text-white hover:bg-[#813858] " onClick={()=>handleUpdate(_id)}>Deliver The Food? </button>

                          
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
    );
};

export default ManageReq;


