
import { Link } from 'react-router-dom';
import image404 from '../../images/delivery-break-404-error-animation-fast-food-restaurant-worker-empty-state-4k-concept-footage-with-alpha-channel-transparency-colorful-page-not-found-flash-message-for-ui-ux-web-design-video.jpg'; 

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
      <img src={image404} alt="404 Error" className="max-w-2xl  mt-4" /> 
        <h1 className="text-6xl text-red-500 font-semibold">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <Link to='/'><button className="btn mt-10 bg-[#99627A] border-none text-white hover:text-[#99627A]">Go back</button></Link>
    
        <div className="animate-bounce mt-4">
          <div className="w-8 h-8 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
