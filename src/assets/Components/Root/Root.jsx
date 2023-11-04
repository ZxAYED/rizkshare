import { Outlet } from "react-router-dom";
import NavBAr from "./NavBAr";


const Root = () => {
    return (
        <div>
            <NavBAr></NavBAr>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;