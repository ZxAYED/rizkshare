// import Table from 'rc-table';

import axios from "axios";
import { useState } from "react";

const MyFoods = () => {
    const [data,setData]=useState(null)
    axios.get('http://localhost:5000/RizkShare/RequestedFood',{withCredentials:true})
    .then(res=>console.log(res))
    .catch(err=>{console.log(err);})
    // const columns =[
    //     {

    //     }
    // ]
    return (
        <div>
            My foods ueASD
        </div>
    );
};

export default MyFoods;