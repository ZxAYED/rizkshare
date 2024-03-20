import { Link } from "react-router-dom";
import AboutUS from "../SIngleData/AboutUs";
import AvailableFoods from "./AvailableFoods";
import Banner from "./Banner";
import HomeFoods from "./HomeFoods";
import WhyChooseRizkShare from "./WHyChoose/WhyChooseRizkShare";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" md:mx-10 lg:mx-auto">  <HomeFoods/></div>
            <Link to='/RizkShare/AvialableFoods'> <button className="btn block mx-auto   mt-10 lg:flex bg-[#99627A] border-none w-fit text-white hover:text-[#99627A]">Show more !</button></Link>
      
            <div className="max-w-7xl mx-auto rounded-xl my-10"><WhyChooseRizkShare></WhyChooseRizkShare></div>
            <div className="max-w-7xl mx-auto rounded-xl my-10"><AboutUS></AboutUS></div>
            
         
        </div>
    );
};

export default Home;