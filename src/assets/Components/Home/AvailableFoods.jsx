
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCards from "./FoodCards";
const AvailableFoods = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
       axios.get('http://localhost:5000/RizkShare/availableFoods',{withCredentials:true    })
       .then(res=>{setData(res.data)})
    },[])

    return (
        <div className='max-w-7xl mx-auto mt-10 text-center'>
            <h1 className='text-3xl font-bold'>Discover Fresh, Available Foods</h1>
            <p className='py-5 font-semibold'>
            In our "Available Foods" section, you'll find a wide array of fresh, nourishing options waiting to be shared with our community. These foods are generously offered by our donors and are just a click away from reaching those who need them.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 ">
                {
                    data?.map(items=> <FoodCards key={items._id} items={items} ></FoodCards>,
                     )
                }
               
            </div>
        </div>
    );
};

export default AvailableFoods;