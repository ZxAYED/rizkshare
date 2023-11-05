import { Outlet } from "react-router-dom";
import NavBAr from "./NavBAr";
import Headroom from "react-headroom";
import Footer from './Footer';


const Root = () => {
    return (
        <div>
           <Headroom><NavBAr></NavBAr></Headroom> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;