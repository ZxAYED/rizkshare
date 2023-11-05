import img from '../../images/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer text-[#643843] p-10 bg-gray-300 ">
        <aside className=''>
            <div className='flex gap-5 justify-center items-center'>
          <img className='h-20 w-20 rounded-[50%]' src={img} alt="logo" />
          <p className='text-3xl font-black'>RizkShare</p></div>
          <p className='text-semibold'>RizkShare: Sharing the Blessing of Food <br /> One Meal at a Time - Delivering Great Service to Nourish Communities</p>
        </aside> 
      
        
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;