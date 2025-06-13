import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import bhai from "../../assets/profile.jpg"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <img
            src={bhai}
            alt="Contact"
            className="w-full h-72 object-cover rounded-xl shadow-lg"
          />
          <div className="space-y-2">
            <p className="text-xl font-semibold">📧 srijankumar77777@gmail.com</p>
            <p className="text-lg">📍 Jamshedpur, India</p>
          </div>
          <div>
            Let's Collaborate, Connect, and Grow Together.
            Whether you have a project in mind, an opportunity to share, or just want to connect — I'm always open to meaningful conversations and collaborations that drive innovation and growth. Reach out and let's build something impactful!
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 text-center">
            Get In Touch - Let's Connect
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Name..."
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="example@gmail.com"
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Your Message..."
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
