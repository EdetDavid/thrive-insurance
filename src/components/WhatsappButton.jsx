import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

const whatsappNumber = "2347087942708"; // Replace with your WhatsApp number (country code + number, no + sign)
const message = encodeURIComponent(
  "Hello, I'm interested in getting insurance but not sure where to start. Can you help me understand what type of insurance i need, how it works, and how much it costs?."
);

const WhatsappButton = () => (
  <a
    href={`https://wa.me/${whatsappNumber}?text=${message}`}
    className="whatsapp-fab"
    target="_blank"
    rel="noopener noreferrer"
    title="Chat with us on WhatsApp"
  >
    <FaWhatsapp size={28} />
    <span className="whatsapp-text">Live Chat</span>
  </a>
);

export default WhatsappButton;
