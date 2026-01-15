import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFileContract, FaGithub, FaLinkedin, FaPhone, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import emailjs from "emailjs-com";


const PortFolio = () => {
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_dre4prj',    
    'template_seacm6n',   
    e.target,             
    'Ui4yptrO5_IXsV4wf'     
  )
  .then((result) => {
    console.log('Email sent:', result.text);
    alert('Message sent successfully!');
    e.target.reset();     // optional: clears the form after sending
  }, (error) => {
    console.log('Error:', error.text);
    alert('Failed to send message. Please check your EmailJS configuration.');
  });
};


  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
  ];
  const Timages = [
    "/T1.png",
    "/T2.png",
    "/T3.png",
  ];
  return (
    <div className="min-h-screen bg-gray-300 text-gray-900">
      <header className="max-w-8xl mx-auto px-6 py-5 flex items-center justify-between bg-blue-950 text-white">
        <h1 className='text-2xl font-bold px-28 animate-pulse'>
          SAIRA SIDDIQUE
        </h1>
        <nav className=' flex flex-wrap text-sm space-x-14 pr-40' >
          <a href="#contact" className='hover:text-[16px] hover:text-blue-200'><FaPhoneAlt className="text-white text-2xl
           hover:text-gray-400 hover:text-3xl transition" /></a>
          <a href="https://github.com/sairasiddique05" className='hover:text-[16px] hover:text-blue-200'><FaGithub className="text-white text-2xl
           hover:text-gray-400 hover:text-3xl transition" /></a>
          <a href="https://www.linkedin.com/in/saira-siddique-3a85b51b2/" className='hover:text-[16px] hover:text-blue-200'>
            <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-400 hover:text-3xl transition" /></a>
          <a href="https://x.com/sairasiddique05" className='hover:text-[16px] hover:text-blue-200'>
            <FaTwitter className="text-white text-2xl cursor-pointer hover:text-sky-400 hover:text-3xl transition" /></a>
        </nav>
      </header>

      {/* main intro name */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-1">
        <div className="text-3xl text-[rgb(18, 18, 62)] px-24 space-y-7">
          {/* Saira Siddique */}
          <div className='text-3xl font-bold text-blue-950'>
            Full Stack Developer
            <div className="md:w-2/3 text-blue-500 font-normal text-[20px]">
              <Typewriter
                words={[
                  "Web Developer.",
                  "Graphic Designer.",
                  "Web Designer.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>
          </div>
          <p className="text-[15px] text-blue-950">
            Builds fast, scalable, and user-friendly web applications, combining clean code with modern UI/UX and graphic design principles.
            Works with modern frontend and backend technologies to deliver complete, visually compelling digital solutions.</p>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 mt-8">
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm hover:border hover:border-blue-950">JavaScript</span>
            <span className="text-xs bg-purple-100 text-purple-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full md: text-sm hover:border hover:border-purple-950">React  </span>
            <span className="text-xs bg-teal-100 text-teal-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full md: text-sm hover:border hover:border-teal-950">Node.js</span>
          </div>

          <div className="flex flex-col sm:flex-row  gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0 text-[15px] text-blue-950">
            <a href="#work" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
              <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                View Work
                <svg className="w-14 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>

            </a>

            <a href="#contact" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
              <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                Get in Touch
              </span>

            </a>
          </div>


        </div>

        {/* intro right side picture */}

        <div className="px-28 py-10">
          <img src="/intro.png" alt="SairaSiddique" />
        </div>
      </section>

      {/* Scroll Arrow */}

      <div class="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
        <span class="text-blue-900 text-sm mb-2 text-center">
          Scroll to explore
        </span>

        <svg
          class="w-6 h-6 text-blue-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <hr className="bg-blue-950 my-14 mx-12 border h-[1.2px]"></hr>

      {/* Technical Experties */}

      <section className="py-3 sm:py-2 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-blue-950">Technical Experties</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">

                {/* Fronend Card */}
                <span className="text-1xl">🎨</span>
                <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">React&Node.js</span>
                    <span className="text-gray-500">80%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-expand origin-left" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">JavaScript</span>
                    <span className="text-gray-500">85%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-expand origin-left" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Modern CSS</span>
                    <span className="text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-expand origin-left" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Web Animation</span>
                    <span className="text-gray-500">60%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-expand origin-left" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-1xl">⚡</span>
                <h3 className="text-xl font-bold text-gray-900">Backend & ApIs</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Node.js</span>
                    <span className="text-gray-500">90%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 animate-expand origin-left" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">MongoDB, Mongoose</span>
                    <span className="text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 animate-expand origin-left" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">JWT&bcrypt</span>
                    <span className="text-gray-500">75%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 animate-expand origin-left" style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">RESTful APIs</span>
                    <span className="text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 animate-expand origin-left" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance and Devop card */}

            <div className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-1xl">🚀</span>
                <h3 className="text-xl font-bold text-gray-900">Performance & DevOps</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Web Performance</span>
                    <span className="text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 animate-expand origin-left"
                      style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">CI/CD</span>
                    <span className="text-gray-500">85%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 animate-expand origin-left"
                      style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Docker</span>
                    <span className="text-gray-500">70%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 animate-expand origin-left"
                      style={{ width: "70%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">AWS</span>
                    <span className="text-gray-500">95%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 animate-expand origin-left"
                      style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="bg-blue-950 my-14 mx-12 border h-[1.2px]"></hr>


      {/* Projects */}

      <section className="py-3 sm:py-2 px-4 space-y-11">
        <div className="max-w-6xl mx-auto">
          <h1 id="work" className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-blue-950 transition-all animate-pulse">Featured Projects</h1>
        </div>
        {/* project card1 here */}
        <div className="relative min-h-[400px] rounded-3xl overflow-hidden bg-white p-6 transform hover:scale-[1.02] 
        transition-all shadow-sm hover:shadow-md">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-10 p-6">

            {/* right side content of lms project */}
            <div className="relative z-50 p-6 text-blue-900">
              <span className="text-2xl font-bold mt-4 mb-3">
                Online Quran Teaching
              </span>

              <p className="text-[14px] leading-relaxed text-blue-950 mt-6">
                Developed a responsive Online Quran Teaching website that supports
                structured courses, flexible scheduling, and a user-friendly
                interface for seamless online Quran education.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                <span className="text-xs bg-blue-200 text-blue-700 px-3 py-1.5 rounded-full hover:border hover:border-blue-950">
                  React
                </span>
                <span className="text-xs bg-green-200 text-green-700 px-3 py-1.5 rounded-full hover:border hover:border-green-950">
                  Tailwind CSS
                </span>
                <span className="text-xs bg-purple-200 text-purple-700 px-3 py-1.5 rounded-full hover:border hover:border-purple-950">
                  Node.js
                </span>
              </div>

              {/* project link button */}
              <div className="flex flex-wrap gap- md:gap-3 mt-8">
                <span className="bg-blue-950 text-white text-xl px-3 py-1.5 rounded-2xl hover:bg-blue-500">
                  <a href="https://quran-lms.vercel.app/">Live Demo</a>
                </span>
                <span className="bg-white text-blue-950 text-xl shadow-black shadow-[20px] px-3 py-1.5 rounded-2xl hover:bg-blue-500">
                  <a href="https://github.com/sairasiddique05/quran-lms.git">code</a>
                </span>
              </div>

            </div>

            {/* left side slider of lms project */}
            <div className="bg-white border-2 border-white rounded-3xl transform hover:scale-[1.02] 
            transition-all shadow-gray-800 shadow-2xs hover:shadow-md w-full max-w-[340px] max-h-[360px] mx-auto">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="w-full h-[300px] rounded-2xl overflow-hidden"
              >
                {images.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="relative bg-contain rounded-3xl bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>


        {/* project card2 */}
        <div className="relative min-h-[400px] rounded-3xl overflow-hidden bg-white p-6 transform hover:scale-[1.02] 
        transition-all shadow-sm hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-10 p-6">

            {/* right side content of lms project */}
            <div className="relative z-50 p-6 text-blue-900">
              <span className="text-2xl font-bold mt-4 mb-3">
                Travel_Bloom
              </span>

              <p className="text-[14px] leading-relaxed text-blue-950 mt-6">
                TravelBloom is a clean and engaging travel recommendation platform designed to inspire users to
                explore dream destinations and book their perfect trips. It features a user‑friendly interface
                that highlights global travel options with a focus on cultural exploration and seamless navigation.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                <span className="text-xs bg-blue-200 text-blue-700 px-3 py-1.5 rounded-full hover:border hover:border-blue-950">
                  HTML5
                </span>
                <span className="text-xs bg-green-200 text-green-700 px-3 py-1.5 rounded-full hover:border hover:border-green-950">
                  JavaScript
                </span>
                <span className="text-xs bg-purple-200 text-purple-700 px-3 py-1.5 rounded-full hover:border hover:border-purple-950">
                  JSON
                </span>
              </div>

              {/* project link button */}
              <div className="flex flex-wrap gap- md:gap-3 mt-8">
                <span className="bg-blue-950 text-white text-xl px-3 py-1.5 rounded-2xl hover:bg-blue-500">
                  <a href="https://travelbloom.vercel.app/">Live Demo</a>
                </span>
                <span className="bg-white text-blue-950 text-xl shadow-black shadow-[20px] px-3 py-1.5 rounded-2xl hover:bg-blue-500">
                  <a href="https://github.com/sairasiddique05/travel_Recommendation.git">code</a>
                </span>
              </div>

            </div>

            {/* left side slider of lms project */}
            <div className="bg-white border-2 border-white rounded-3xl transform hover:scale-[1.02] 
            transition-all shadow-gray-800 shadow-2xs hover:shadow-md w-full max-w-[340px] max-h-[360px] mx-auto">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="w-full h-[300px] rounded-2xl overflow-hidden"
              >
                {Timages.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="relative bg-contain rounded-3xl bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

      </section>
      <hr className="bg-blue-950 my-14 mx-12 border h-[1.2px]"></hr>

      {/* Contact Us page */}

      <section className="py-3 sm:py-2 px-4 space-y-11">


        <div id="contact" className="relative min-h-[400px] rounded-3xl overflow-hidden bg-blue-950 p-6 transform hover:scale-[1.02] 
        transition-all shadow-sm hover:shadow-md">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-center text-white transition-all animate-pulse">
              Let's Build Something Amazing</h1>
          </div>
          <div className="max-w-6xl mx-auto">
            <p className="text-white text-center">Looking for a developer who can create high-performance, interactive web experiences?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-10 p-6">

            {/* right side content of lms project */}
            <div className="relative z-50 p-6">
              <form
                className="space-y-4 text-white"
                onSubmit={sendEmail}
              >
                <div>
                  <label className="block text-white mb-1">Name</label>
                  <input
                    type="text"
                    name="user_name"   // ✅ required
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-1">Email</label>
                  <input
                    type="email"
                    name="user_email"  // ✅ required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-1">Message</label>
                  <textarea
                    rows="4"
                    name="message"     // ✅ required
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-blue-950 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
                >
                  Send Message
                </button>
              </form>


              <div className="grid grid-cols-3 gap-0 mt-4">
                <p className="text-white text-[12px]">Contact: 03018578826</p>
                <p className="text-white text-[12px]">Email: sairasiddique05@gmail.com</p>
                <div className=' flex flex-wrap text-sm space-x-5 pr-10' >
                  <a href="#" className='hover:text-[16px] hover:text-blue-200'>
                    <FaPhoneAlt className="text-white text-1xl hover:text-gray-400 hover:text-3xl transition" /></a>

                  <a href="https://github.com/sairasiddique05" className='hover:text-[16px] hover:text-blue-200'>
                    <FaGithub className="text-white text-1xl hover:text-gray-400 hover:text-3xl transition" /></a>

                  <a href="https://www.linkedin.com/in/saira-siddique-3a85b51b2/" className='hover:text-[16px] hover:text-blue-200'>
                    <FaLinkedin className="text-white text-1xl cursor-pointer hover:text-blue-400 hover:text-3xl transition" /></a>

                  <a href="https://x.com/sairasiddique05" className='hover:text-[16px] hover:text-blue-200'>
                    <FaTwitter className="text-white text-1xl cursor-pointer hover:text-sky-400 hover:text-3xl transition" /></a>
                </div>
              </div>

            </div>

            {/* left side contact */}
            <div className="mt-6">
              <img src="/c1.png" alt="contactUs" />
            </div>



          </div>

        </div>
      </section >

    </div >
  )
}

export default PortFolio