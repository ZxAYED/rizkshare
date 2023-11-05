

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";


import DataTable from 'react-data-table-component';



const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:5000/RizkShare/RequestedFood/?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                console.log(res)

                setData(res)
            })
            .catch(err => { console.log(err); })
    }, [user?.email])

    const columns = [
        {
            title: 'Name',

            selector: row => row.name,

            sortable: true,
        },
        {
            title: 'email',

            selector: row => row.email,
            sortable: true,
        },
        {
            title: 'age',

            selector: row => row.age,
            sortable: true,
        },

    ]

    return (
        <div className="">
Kaj korena
            {/* <div>
                <h2>Table with basic caption</h2>
                <DataTable columns={columns} data={data} caption="Users including age and address" />
                <br />
                <h2>Table with complex caption</h2>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    fixedHeader

                />
            </div> */}

        </div>
    );
};

export default MyFoods;