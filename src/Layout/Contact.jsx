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
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Contact Information
            </h3>
            <p className="">
              I’m available for freelance work or collaboration on interesting projects.<br/>  
              Send me a message, and I’ll get back to you soon!
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-600 text-xl" /> +880 1318989245
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" /> Dhaka, Bangladesh
              </p>
            </div>
            <button className="flex justify-center p-3">
              <a href="mailto:shahriarsopnilraj@gmail.com" className="flex gap-3 items-center p-5 bg-gray-600 rounded-md text-2xl">
                <FaEnvelope className="text-indigo-600 text-2xl" /> shahriarsopnilraj@gmail.com
              </a>
            </button>

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
        </div>
      </div>
    </section>
  );
};

export default Contact;
