import AboutUS from "../SIngleData/AboutUs";
import AvailableFoods from "./AvailableFoods";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" md:mx-10 lg:mx-auto">  <AvailableFoods></AvailableFoods></div>
            <div className="max-w-7xl mx-auto rounded-xl my-10"><AboutUS></AboutUS></div>
           
         
        </div>
    );
};

export default Home;