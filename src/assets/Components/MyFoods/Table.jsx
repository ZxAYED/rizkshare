// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ConfirmToast } from 'react-confirm-toast'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Table = ({item,handleDelete}) => {

//     const [data,setData]=useState(item)
//     const{expiredDateInDays,foodImage,foodDonatorEmail,foodDonatorName,foodName,notes,date,pickupLocation,email,foodQuantity,_id,id,status,donation} =data

  
    
 




//     return (
//       <tr className="bg-white border-b ">
//       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//           <div className='flex gap-2 items-center '>
//           <img className='h-20 w-20 rounded-2xl  ' src={foodImage} alt="" />
//           <p>{foodName}</p>
//           </div>
//       </th>
//       <td className="px-6 py-4">
//       Donation: {donation? donation:0} $ <br /> Status :{status}
//       </td>
//       <td className="px-6 py-4">
//           {expiredDateInDays}
//           <p>Food quantity: {foodQuantity}</p>
//       </td>
//       <td className="px-6 py-4">
//         <p>{email}</p> 
//         <p>Pick up Location :{pickupLocation}</p>
//       </td>
    



//       <td className="px-6 py-4">
//       <Link to={`/RizkShare/${id}`}> <button className="text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858] ">Manage</button>
//       </Link>
//       </td>
//       <td className="px-6 py-4">
  
 
// <button className="text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858] " onClick={()=>document.getElementById('my_modal_5').showModal()}>Cancel request</button>
// <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
// <div className="modal-box">
//   <h3 className="font-bold text-lg">Are you Sure?</h3>
//   <p className="py-4">Do you want To delete  your request permanently?</p>
//   <div className="modal-action">
//     <form method="dialog">
//      <div className='flex gap-4 justify-center items-center'>
//       <button className="btn text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858]">Close</button>
//       <button onClick={()=>handleDelete(_id)} className="btn text-sm bg-[#99627A] border-none p-2 rounded-xl text-white hover:bg-[#813858]">Delete</button></div>
//     </form>
//   </div>
// </div>
// </dialog>



//       </td>
//       <ToastContainer
// position="top-right"
// autoClose={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// theme="light"
// />
//   </tr>
    
//     );
// };

// export default Table;