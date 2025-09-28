"use client";

import React, { ReactElement, useState } from "react";
import { X } from "lucide-react";

export default function EmailForm({ onClose }: { onClose: () => void }) {
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    const recipient = "suras.sunktong@gmail.com";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${sender}\n\n${body}`)}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <div className="fixed z-100 bottom-4 right-4 w-96 bg-foreground rounded-2xl shadow-2xl border border-gray-200 p-6 animate-slide-up text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Send Email</h2>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          {""}
          <X size={20} className="cursor-pointer" />
        </button>
      </div>

      {/* Sender email */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Your Email</label>
        <input
          type="email"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="your@email.com"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Subject */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Email subject"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Body */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message here..."
          rows={4}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Send button */}
      <button
        onClick={handleSend}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}
