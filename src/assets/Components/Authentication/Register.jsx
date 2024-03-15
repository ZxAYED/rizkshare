
import { Link, useNavigate } from 'react-router-dom';
import img from '../../images/register.webp';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { createUser,googleSignIn} = useContext(AuthContext)
    const [error, setError] = useState(null)
const navigate= useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const password = form.password.value
        const email = form.email.value
      
        const foodDonatorName =form.name.value
        const foodDonatorImage =form.image.value
        console.log(email,foodDonatorImage,foodDonatorName,password)

        createUser(email, password)
            .then(function (response) {
                if (response) {
                      toast.success('User Registered successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
                }
                navigate('/')
            })
            .catch(function (err) {
                 setError(err);
                if(err){ 
                  toast.err(err?.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })}
               
            });
          
    }
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(res => {
                if(res){
                    toast.success('User Sign out SuccessFully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })}
                        navigate('/')
                })
            .catch(err => {
            
                setError(err);
                if (error) {
                    toast.error(error.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })
                }
    })
}



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content max-w-7xl mx-auto ">
                <div className="">
                    <div className="relative w-full max-w-7xl max-h-full mx-auto border-yellow-400 rounded-2xl border-2 text-white">

                        <div className="relative bg-transparent rounded-lg shadow-2xl">

                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-center text-3xl font-bold"> Please <span className='text-yellow-500 font-bold '>Register</span> to our platform </h3>
                                <form className='p-16 ' onSubmit={handleRegister}>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="email" name="email"  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " required />
                                        <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="password" name="password"  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " required />
                                        <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="password" name="image" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " required />
                                        <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Profile Photo Url:</label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="name"  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " required />
                                            <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" "  />
                                            <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" "  />
                                            <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" "  />
                                            <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="text-white w-fit mx-auto flex mt-10 bg-yellow-400 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium hover:border-1 hover:border-yellow-400 rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
                                    <div className='flex justify-center my-5 items-center gap-4'>
                                        <hr className='w-full  bg-yellow-400' />OR<hr className='w-full bg-yellow-400 ' /></div>
                                    <div className="mt-4 grid">
                                        <button onClick={handleGoogleSignIn} type="submit" className="text-white mx-auto flex mt-2 bg-yellow-400 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium hover:border-1 hover:border-yellow-400 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  gap-4">
                                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                            </svg>
                                            Sign up with Google
                                        </button>
                                    </div>
                                    <Link to="/RizkShare/Login"><p className='my-8 text-center'>Already have and account at <span className='text-yellow-500 font-bold '>RizkShare</span>? Click here to <span className='text-purple-600 font-bold'>Log in</span> </p></Link>
                                </form>
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
                    </div>
                </div>
            </div>
        </div>

    );
};





export default Register;