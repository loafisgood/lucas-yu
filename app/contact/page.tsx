"use client";
import React, { useState } from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvoljgde"); // Replace with your Formspree endpoint
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const handleNameChange = (e: any) => setName(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleMessageChange = (e: any) => setMessage(e.target.value);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-solid border-black bg-white">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6 text-center w-1/2">If you want to contact me, please fill out the form below! If you can't reach me through this form, My e-mail is
        <span className="font-bold border-b-2 cursor-pointer"> lucas.loafisgood&apos;s@gmail.com</span></p>

      {status === "success" && (
        <p className="mb-6 text-green-600">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mb-6 text-red-600">Oops! Something went wrong.</p>
      )}
      <form
        className="max-w-md w-full flex flex-col"
        onSubmit={onSubmit}>
        <label htmlFor="name" className="mb-2 block font-bold">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className="w-full border rounded-md px-4 py-2 mb-4 text-black bg-white"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="email" className="mb-2 block font-bold">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          className="w-full border rounded-md px-4 py-2 mb-4 text-black bg-white"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="message" className="mb-2 block font-bold">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className="w-full border rounded-md px-4 py-2 mb-6 text-black bg-white"
          value={message}
          onChange={handleMessageChange}
          required />
        <div className="items-center text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;