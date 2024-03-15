import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBAr = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(res => {

            })
            .catch(err => { })
        toast.success('User Sign out SuccessFully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const navlinks = <>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-3 ">
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#99627A] btn border-none text-white hover:text-[#99627A] px-0" : ''}
            ><button className="btn btn-ghost  font-bold   "> Home</button></NavLink>
            <NavLink to='/RizkShare/AvialableFoods' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#99627A] btn border-none text-white hover:text-[#99627A] px-0  " : ''}
            ><button className="btn btn-ghost  "> Available Foods</button></NavLink>
            <NavLink to='/RizkShare/RequestedFood' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#99627A] btn border-none text-white hover:text-[#99627A] px-0  " : ''}
            ><button className="btn btn-ghost  "> My Foods Request</button></NavLink>
            <NavLink to='/RizkShare/AddFood' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#99627A] btn border-none text-white hover:text-[#99627A] px-0  " : ''}
            ><button className="btn btn-ghost  "> Add a Food</button></NavLink>
            <NavLink to='/RizkShare/ManageFoods' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#99627A] btn border-none text-white hover:text-[#99627A] px-0  " : ''}
            ><button className="btn btn-ghost  "> Manage Added Foods</button></NavLink>

            <div className="  group inline ">
                <label tabIndex={0} className="btn-ghost flex justify-center items-center btn ">
                    More
                </label>
                <ul   className="hidden absolute group-hover:block insert-0 lg:top-12   menu menu-sm  dropdown-content mt-3 z-[1] bg-[#E7CBCB] rounded-box w-52">
                    <li><NavLink to='/RizkShare/AboutUs' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "  " : ''}
                    ><button className="text-lg"> About Us</button></NavLink></li>
                    <li>
                        <NavLink to='/RizkShare/News' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  " : ''}
                        ><button className="text-lg"> Contact</button></NavLink></li>

    
<li className="navbar-end">
                    {
                        user ? <button onClick={handleSignOut} className="btn lg:block xl:hidden bg-[#99627A] border-none text-white hover:text-[#99627A]">Sign Out</button> : <Link to='/RizkShare/Login'><button className="btn bg-[#99627A] border-none text-white hover:text-[#99627A]">Log in</button></Link>
                    }

                </li>

                </ul>
            </div>







        </div>
    </>
    return (
        <div className=" bg-[#E7CBCB] pr-4 xl:pr-0">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl">RizkShare</a>
                </div>
                <div className="navbar-center hidden lg:flex g">
                    <ul className=" h-20  flex-nowrap menu-horizontal ">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end  ">
                    {
                        user ? <button onClick={handleSignOut} className="btn lg:hidden xl:block bg-[#99627A] border-none text-white hover:text-[#99627A]">Sign Out</button> : <Link to='/RizkShare/Login'><button className="btn lg:hidden xl:block bg-[#99627A] border-none text-white hover:text-[#99627A]">Log in</button></Link>
                    }

                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default NavBAr;