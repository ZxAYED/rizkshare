import { Outlet } from "react-router-dom";
import NavBAr from "./NavBAr";
import Headroom from "react-headroom";
import Footer from './Footer';


const Root = () => {

        return (

         
                <div>
                    <Headroom><NavBAr></NavBAr></Headroom>
                    <div >
                    <Outlet ></Outlet></div>
                    <Footer></Footer>
                </div>

            
        );
    
};

export default Root;