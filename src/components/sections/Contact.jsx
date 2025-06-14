import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
import bhai from "../../assets/profile.jpg"
import { ModelViewer } from "./ModelViewer";

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
        alert("Message Sent! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-gray-900"
    >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Contact Me!
        </h2>
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
       <ModelViewer/>
       {/* Right Side Form */}
       <div className="w-full md:w-2/3 bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 text-center">
        Let's Connect
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
  type="text"
  name="from_name" 
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
  name="from_email" 
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
