import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  
  return (
    <section id="contact" className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Get in <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="mt-2">
            Feel free to reach out — I’d love to connect and collaborate!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Contact Information
            </h3>
            <p className="">
              I’m available for freelance work or collaboration on interesting projects.  
              Send me a message, and I’ll get back to you soon!
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-600 text-xl" /> shahriarsopnilraj@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-600 text-xl" /> +880 1318989245
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" /> Dhaka, Bangladesh
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl mt-6">
              <a
                href="linkedin.com/in/shahriar-sopnil-raj-037100387"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Shahriarsopnilraj"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/shahriar__sopnil?igsh=MWVxOTV1bHI5a20zdg=="
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5 border border-gray-100">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all w-full font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
