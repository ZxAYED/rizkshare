import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const News = () => {
    
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    const [faqs, setFaqs] = useState([
        {
          question: "How can I donate food or money through RizkShare?",
          answer: "Donating food or money is easy! Simply visit our 'Donate' section and follow the instructions to make your contribution.",
          isOpen: false,
        },
        {
          question: "How do I request free food through RizkShare?",
          answer: "Visit the 'Order Food' section, choose the available meals, and place your order. Our community will ensure you receive the food you need.",
          isOpen: false,
        },
        {
          question: "What happens to surplus food donated through RizkShare?",
          answer: "Surplus food is distributed to local shelters and families in need, reducing food waste and nourishing the community.",
          isOpen: false,
        },
        {
          question: "How can I get involved in the RizkShare community?",
          answer: "Join our community of volunteers and donors. Your support is essential in our mission to make a difference.",
          isOpen: false,
        },
      ]);
    
      const toggleFAQ = (index) => {
        const updatedFaqs = faqs.map((faq, i) => {
          if (i === index) {
            return { ...faq, isOpen: !faq.isOpen };
          } else {
            return { ...faq, isOpen: false };
          }
        });
        setFaqs(updatedFaqs);
      };
    

 


  return (
    <section className="max-w-7xl mx-auto ">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className=" text-4xl py-3 text-center  font-bold">Contact us</p>
            <p className="  pb-5 text-xl text-center  ">At RizkShare, we believe in the power of community and the impact it can have on lives. Whether you have questions, suggestions, or simply want to get in touch, we're here for you. Our team is dedicated to making a positive change in the world through food sharing and donations. Feel free to reach out to us through the contact information below. Your input and support are invaluable in our mission to reduce food waste and ensure that no one goes to bed hungry. Let's work together to create a better and more compassionate world.</p>

            <h1 className="mt-2 text-2xl font-semiboldmd:text-3xl ">Chat to our friendly team</h1>

            <p className="mt-3  ">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-[#99627A] rounded-full bg-blue-100/80 dark:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium">Email</h2>
                    <p className="mt-2 text-sm  ">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-[#99627A] ">RizkShare@gmail.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-[#99627A] rounded-full bg-blue-100/80 dark:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium">Live chat</h2>
                    <p className="mt-2 text-sm  ">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-[#99627A] ">Start new chat</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-[#99627A] rounded-full bg-blue-100/80 dark:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium">Office</h2>
                    <p className="mt-2 text-sm  ">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm text-[#99627A] ">100 Smith Street Collingwood VIC 3066 AU</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-[#99627A] rounded-full  dark:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium">Phone</h2>
                    <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-[#99627A]">+1 (555) 000-0000</p>
                </div>
            </div>

            <div className="p-4 py-6 rounded-lg  bg-[#99627A] md:p-8">
          
                <form  data-aos="fade-up"
     data-aos-duration="1500">
                <h1 className="text-3xl py-5 text-center text-white font-bold">Feel free to knock us !</h1>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder=" " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-[#99627A]  dark:focus:border-[#99627A]  focus:ring-[#99627A] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-[#99627A]  dark:focus:border-[#99627A]  focus:ring-[#99627A] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-[#99627A]  dark:focus:border-[#99627A]  focus:ring-[#99627A] focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-[#99627A]  dark:focus:border-[#99627A]  focus:ring-[#99627A] focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="btn btn-ghost text-white mx-auto flex mt-10  hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium border-1 border-yellow-400 rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center  ">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
    <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="faq-container"
        >
  



    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently Asked Questions (FAQ)</h1>

      <hr className="my-6 border-gray-200" />

      <div>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={faq.isOpen ? "M6 18L18 6" : "M20 12H4"} />
              </svg>
              <h1 className="mx-4 text-xl mt-3 text-gray-700">{faq.question}</h1>
            </button>
            {faq.isOpen && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>
                <p className="max-w-3xl px-4 pb-5 text-gray-500">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
 



        </motion.div>
</section>
  );
};




    
  


export default News;