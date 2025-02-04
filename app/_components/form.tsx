"use client";

import { useState } from "react";
import Alert from "./alert";

const FormComponent: React.FC = () => {

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<null | boolean>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);


    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), 
    });

    if (response.ok) {
      setStatus(true); 
      setFormData({ name: "", email: "", subject: "", message: "" }); 
    } else {
      setStatus(false); 
    }
  };

  return (
    <div id="contact" className="w-full h-screen flex items-center justify-center bg-text">
      <div className="bg-opacity-10 rounded-lg p-10 lg:w-[500px] w-full transform transition-all duration-500">
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Let&apos;s <span className="text-distinct">connect.</span>
        </h2>


        {status !== null && <Alert result={status} />}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              className="w-full rounded-lg border border-distinct bg-transparent p-3 text-sm text-white placeholder-scandry focus:outline-none focus:ring-2 focus:ring-dtext-distinct"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              className="w-full rounded-lg border border-distinct bg-transparent p-3 text-sm text-white placeholder-scandry focus:outline-none focus:ring-2 focus:ring-dtext-distinct"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="subject"
            className="w-full rounded-lg border border-distinct bg-transparent p-3 text-sm text-white placeholder-scandry focus:outline-none focus:ring-2 focus:ring-dtext-distinct"
            placeholder="Subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="w-full rounded-lg border border-dtext-distinct bg-transparent p-3 text-sm text-white placeholder-scandry focus:outline-none focus:ring-2 focus:ring-dtext-distinct"
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="rounded-full border border-distinct px-6 py-2 text-white transition-all duration-300 hover:bg-distinct hover:border-scandry"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
