

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";


import DataTable from 'react-data-table-component';
import Table from "./Table";
import { toast } from "react-toastify";



const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/RizkShare/RequestedFood/?email=${user?.email}`, { withCredentials: true })
            .then(res => {
               

                setData(res.data)
            })
            .catch(err => { console.log(err); })
    }, [user?.email])

   

    return (
        <div >

         
<div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-7xl my-10 mx-auto">
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
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map(item=><Table key={data._id}  item={item}></Table>)
            }
            
        
        </tbody>
    </table>
</div>


        </div>
    );
};

export default MyFoods;