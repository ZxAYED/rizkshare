import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


const ManageFoods = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/RizkShare/ManageFoods/?email=${user?.email}`, { withCredentials: true })
            .then(res => {
               

                setData(res.data)
            })
            .catch(err => { console.log(err); })
    }, [user?.email])
  


  
    const handleDelete=id=>{

        fetch(`http://localhost:5000/RizkShare/availableFoods/${id}`,{
         method:'DELETE'
        })
        .then(res=>res.json())
        .then(items=>{
            console.log(items);
        //  if(datas.DeletedCount >0){
         toast.success('Data has been Deleted', {
             position: "top-right",
             autoClose: 2100,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
             })
            // }
             
             
             const remaining =data.filter(item =>item._id!==id)
             setData(remaining)
             
        })
        
        
     }
   
   


    return (
        <div>{data?.length < 1 && (
            <h1 className="text-3xl my-5 text-center font-bold">
              Try to add something from products
            </h1>
          )}
          
<div className="relative overflow-x-auto min-h-[60vh] shadow-md sm:rounded-lg max-w-7xl my-10 mx-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr >
                <th scope="col" className="px-6 py-3">
                  Food Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Additional Notes
                </th>
                <th scope="col" className="px-6 py-3">
                    Expires in days
                </th>
                <th scope="col" className="px-6 py-3">
                   Receiver Info
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className="">


        {
            data?.map(item=>{
                const{expiredDateInDays,foodImage,foodDonatorEmail,foodDonatorName,foodName,notes,date,pickupLocation,email,foodQuantity,_id,id,status,donation,} =item
               
                const handleUpdate=e=>{
    
                    e.preventDefault()
                    const form =e.target
                const donation =form.donate.value
                    const newData  ={expiredDateInDays,foodImage,foodDonatorEmail,foodDonatorName,foodName,notes,date,pickupLocation,email,foodQuantity,_id,    donation ,status}
                   
                    console.log(newData);
                      fetch(`http://localhost:5000/RizkShare/availableFoods/${_id}`,{
                       method:'PATCH',
                       headers:{
                          'content-type':'application/json'
                       },
                     body:JSON.stringify(newData)
                       
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


                return (<>
                    <tr className="bg-white border-b  min-h-screen ">
                        
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        <div className='flex gap-2 items-center '>
                        <img className='h-20 w-20 rounded-2xl  ' src={foodImage} alt="" />
                        <p>{foodName}</p>
                        </div>
                    </th>
                    <td className="px-6 py-4">
                    Donation: {donation? donation:0} $ <br /> Status :{status}
                    </td>
                    <td className="px-6 py-4">
                        {expiredDateInDays}
                        <p>Food quantity: {foodQuantity}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{email}</p> 
                      <p>Pick up Location :{pickupLocation}</p>
                    </td>
                  
            
            
            
                    <td className="px-6 py-4">
                    <Link to={`/RizkShare/ManageReq/${_id}`}> <button className="text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858] ">Manage</button>
                    </Link>
                    </td>
                    <td className="px-6 py-4">
                    <div>
                           <a href="#my_modal_100" className="p-2 rounded-xl w-fit bg-[#99627A] flex items-center justify-center mx-auto border-none text-white">Update</a>
            
            <div className="modal w-full bg-[#99627A] " id="my_modal_100">
                <div className="modal-box  max-w-5xl mx-auto ">
            
                    <div className="relative  w-full max-h-full">
            
                        <div className="relative bg-[#99627A] rounded-lg shadow ">
            
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl text-white  text-center font-medium">Want to Update the food? </h3>
                                <form onSubmit={handleUpdate}>
                                    <div className="grid grid-cols-2 gap-5 " >
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donator Email:</label>
                                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={foodDonatorEmail} disabled />
                                        </div>
                                        <div>
                                            <label name="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donator Name:</label>
                                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={foodDonatorName}  />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name:</label>
                                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={foodName}  />
                                        </div>
                                        <div>
                                            <label name="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Id</label>
                                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={_id} disabled />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expired Date in days & Current date:</label>
                                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={`${expiredDateInDays} days & ${date}`}    />
                                        </div>
                                        {/* <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"  />
                                        </div> */}
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes:</label>
                                            <input type="text" name="notes" placeholder="Type here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donate:</label>
                                            <input type="number" name="donate" placeholder="Please Donate some money" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description:</label>
                                            <input type="text" name="description" placeholder="Please Donate some money" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
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
            
                    </div>
                    </td>
                    <td className="px-6 py-4">
                
               
            <button className="text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858] " onClick={()=>document.getElementById('my_modal_5').showModal()}>Detele </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Are you Sure?</h3>
                <p className="py-4">Do you want To delete  your request permanently?</p>
                <div className="modal-action">
                  <form method="dialog">
                   <div className='flex gap-4 justify-center items-center'>
                    <button className="btn text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858]">Close</button>
                    <button onClick={()=>handleDelete(_id)} className="btn text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858]">Delete</button></div>
                  </form>
                </div>
              </div>
            </dialog>
            
            
            
                    </td>
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
                </tr>
                </>
                );







            })      
        }









         
        </tbody>
    </table>
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
    );
};

export default ManageFoods;