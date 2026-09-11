
// app/components/Contact.jsx

'use client';
import { useState } from 'react';
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', formData.email);
    // Send to your email service
    setFormData({ email: '' });
  };

  return (
    <section id="contact" className="bg-black py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl text-amber-600 md:text-5xl font-light mb-4">
            Contact me
          </h2>
          <p className="text-gray-400 font-light mb-12 text-lg">
            so we can create creative projects together
          </p>


           {/* Social Links */}
          <div className="flex gap-16">
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
           <BsTwitterX size={18}/>
          </a> 
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
            <BsFacebook size={18}/>
          </a>
          {/* <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
            vimeo
          </a>
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
            youtube
          </a> */}
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
           <BsInstagram size={18} />
          </a>
        </div>



          {/* <div className="space-y-6">
            <div>
              <a href="mailto:info@mysite.com" className="text-amber-600 hover:text-amber-500 text-sm font-light tracking-widest transition-colors">
                info@mysite.com
              </a>
            </div>
            <div className="text-gray-400 text-sm font-light">
              123-456-7890
            </div>
          </div> */}
        </div>

        {/* Right Side - Newsletter */}
        <div>
          <h3 className="text-lg font-light tracking-widest text-amber-600 mb-8">
            Join my mailing list
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-light mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email here"
                required
                className="w-full bg-transparent border-b border-gray-700 focus:border-amber-600 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
              />
            </div>

            {/* <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 bg-transparent border border-gray-700 focus:border-amber-600"
              />
              <span className="text-sm font-light text-gray-400">
                Yes, subscribe me to your newsletter.
              </span>
            </label> */}

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 font-light tracking-widest text-sm transition-colors"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      {/* <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-gray-800">
        <div className="flex gap-16">
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
           <BsTwitterX size={18}/>
          </a> 
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
            <BsFacebook size={18}/>
          </a>
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
            vimeo
          </a>
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
            youtube
          </a>
          <a href="#" className="text-white hover:text-amber-600 transition-colors text-sm font-light">
           <BsInstagram size={18} />
          </a>
        </div>
      </div> */}


    </section>
  );
}

