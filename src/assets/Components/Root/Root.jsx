import { Outlet } from "react-router-dom";
import NavBAr from "./NavBAr";
import Headroom from "react-headroom";


const Root = () => {
    return (
        <div>
           <Headroom><NavBAr></NavBAr></Headroom> 
            <Outlet></Outlet>
        </div>
    );
};

export default Root;