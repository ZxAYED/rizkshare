import Lottie from 'lottie-react';
import img1 from '../../../images/success.gif'
import img2 from '../../../images/Center.json'
import img3 from '../../../images/why.json'
import img4 from '../../../images/responsive.json'
import img5 from '../../../images/key.gif'


const WhyChooseRizkShare = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold"> Why Choose RizkShare </h1>
            <p className="text-lg text-center py-4 ">Join RizkShare and become part of a movement dedicated to combating food waste and hunger in our communities.</p>
            <div className=" relative  ">
      <section className="w-11/12 max-w-7xl mx-auto shadow-md rounded-xl border-t-2 text-[#144248]  p-6 text-center z-90 ">
       
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6  mt-10">
          <aside
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center lg:gap-4 "
          >
            <img
              className="h-36 col-span-2 row-span-2"
            src={img5}
             
            />
            <h1 className="text-xl font-bold drop-shadow-md ">
            Key Features/Benefits
            </h1>
            <p className=" text-sm  ">
            Community Collaboration: Connect with like-minded individuals and organizations to share surplus food and make a positive impact on society.
User-Friendly Interface: Enjoy an intuitive and easy-to-use platform designed to streamline the process of donating and receiving food donations.
Technology-driven Solutions: Benefit from cutting-edge technologies like React, Firebase, and Node.js, ensuring a seamless and efficient user experience.
            </p>
          </aside>
          <Lottie
            className="max-h-[60vh] lg:col-span-2 lg:row-span-2"
            animationData={img3}
            loop={true}
          />
          <aside
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center gap-4 "
          >
            <Lottie
              data-aos="zoom-in"
              className="h-28 col-span-2 row-span-2"
              animationData={img2}
              loop={true}
            />
            <h1 className="text-xl font-bold drop-shadow-md ">
            Social Impact
            </h1>
            <p className=" text-sm">
            Sustainability: By redistributing surplus food to those in need, <span className="text-[15px]">RizkShare </span> contributes to the reduction of food waste and promotes environmental sustainability.
Community Empowerment: Join a community-driven platform that empowers individuals to make a tangible difference in the lives of others.
            </p>
          </aside>

          <aside
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center gap-4 "
          >
             <img
              className="h-36 col-span-2 row-span-2"
            src={img1}
             
            />
            <h1 className="text-xl font-bold drop-shadow-md ">
            Success Stories & Call to Action
            </h1>
            <p className=" text-sm">
           " Since joining <span className="text-[15px]">RizkShare </span>, I've been able to donate excess produce from my garden to local shelters, knowing that it's making a difference in someone's life." - Sarah, <span></span> <span className="text-[15px]">RizkShare </span> User . <br />
           "Ready to make a difference? Join <span className="text-[15px]">RizkShare </span> today and be part of the solution to food waste and hunger in your community!"
            </p>
          </aside>

          <aside
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-center flex flex-col justify-center items-center gap-4 "
          >
          <Lottie
            className="max-h-[60vh] lg:col-span-2 lg:row-span-2"
            animationData={img4}
            loop={true}
          />
            <h1 className="text-xl font-bold drop-shadow-md ">
           Visual & Responsive Design
            </h1>
            <p className=" text-sm">
            Enhance the section with visually appealing elements such as images, icons, or graphics that reinforce your messaging and branding. Use colors and fonts that align with your website's design aesthetic.
            Ensure that the section is designed to be responsive across different devices, optimizing the layout and content for mobile, tablet, and desktop screens.
            </p>
          </aside>
        </section>
      </section>
    </div>
        </div>
    );
};

export default WhyChooseRizkShare;