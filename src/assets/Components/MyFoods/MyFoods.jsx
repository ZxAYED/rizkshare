

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";



import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";



const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])

   
    useEffect(() => {
        axios.get(`http://localhost:5000/RizkShare/RequestedFood/?email=${user?.email}`, { withCredentials: true })
            .then(res => {
           
                setData(res.data)
            })
            .catch(err => { console.log(err); })
    }, [user?.email])

    const handleDelete=(id,foodName)=>{

        fetch(`http://localhost:5000/RizkShare/RequestedFood/${id}`,{
         method:'DELETE'
        })
        .then(res=>res.json())
        .then(datas=>{
      console.log(datas);
         toast.success(`${foodName} has been Deleted`, {
             position: "top-right",
             autoClose: 2100,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
             })
           

             const remaining =data.filter(item =>item._id!==id)
             setData(remaining)
       
        
        })
 
        
     }
   
   

    return (
        <div >

         
<div className="relative overflow-x-auto shadow-md min-h-[60vh] sm:rounded-lg max-w-7xl my-10 mx-auto"> 
{data?.length < 1 && (
            <h1 className="text-3xl my-5 text-center font-bold">
              Try to add something from products
            </h1>
          )}
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
            </tr>
        </thead>
        <tbody>
            {
                data?.map(item=>{
                      const{expiredDateInDays,foodImage,foodDonatorEmail,foodDonatorName,foodName,notes,date,pickupLocation,email,foodQuantity,_id,id,status,donation} =item
                    
                    
                    return <>
                       <tr className="bg-white border-b ">
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
      <Link to={`/RizkShare/${id}`}> <button className="text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858] ">Manage</button>
      </Link>
      </td>
      <td className="px-6 py-4">
  
 
<button className="text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858] " onClick={()=>document.getElementById('my_modal_5').showModal()}>Cancel request</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
  <h3 className="font-bold text-lg">Are you Sure?</h3>
  <p className="py-4">Do you want To delete  your request permanently?</p>
  <div className="modal-action">
    <form method="dialog">
     <div className='flex gap-4 justify-center items-center'>
      <button className="btn text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858]">Close</button>
      <button onClick={()=>handleDelete(_id,foodName)} className="btn text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858]">Delete</button></div>
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
  </tr></>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    })
            }
       
            
        
        </tbody>
    </table>
</div>


        </div>
    );
};

export default MyFoods;