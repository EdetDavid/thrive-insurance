import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import "./Chatbot.css";

const defaultMessages = [
  {
    from: "bot",
    text: "Hello! Welcome to Thrive Insurance Brokers. How can I help you with your insurance needs today?",
  },
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages([...messages, userMessage]);

    // Insurance FAQ/keyword-based responses
    const lowerInput = input.toLowerCase();
    let botReply = "Thank you for your message! We'll get back to you soon.";

    if (lowerInput.includes("claim")) {
      botReply =
        "To file or report a claim, please visit the 'Report a Claim' page or contact us directly. We are here to assist you through the process.";
    } else if (lowerInput.includes("life")) {
      botReply =
        "Our Life & Personal Insurance provides financial security for you and your loved ones. Visit the Life Insurance page for more details or to request a quote.";
    } else if (lowerInput.includes("property")) {
      botReply =
        "Property Insurance protects your assets against risks like fire, theft, and natural disasters. See our Property Insurance page for more information.";
    } else if (lowerInput.includes("motor")) {
      botReply =
        "Motor Insurance covers damages, theft, and third-party liabilities for your vehicle. Visit the Motor Insurance page for details and quotes.";
    } else if (lowerInput.includes("liability")) {
      botReply =
        "Liability Insurance covers damages awarded to others for injury or property damage. Learn more on our Liability Insurance page.";
    } else if (lowerInput.includes("engineering")) {
      botReply =
        "Engineering Insurance covers risks related to construction and engineering projects. See our Engineering Insurance page for details.";
    } else if (lowerInput.includes("pecuniary")) {
      botReply =
        "Pecuniary Insurance protects against financial losses such as fraud or employee dishonesty. Visit the Pecuniary Insurance page for more info.";
    } else if (lowerInput.includes("travel")) {
      botReply =
        "Travel Insurance covers medical, financial, and other losses while traveling. See our Travel Insurance page for coverage details.";
    } else if (
      lowerInput.includes("specialty") ||
      lowerInput.includes("marine") ||
      lowerInput.includes("oil")
    ) {
      botReply =
        "Specialty Lines Insurance includes Marine and Oil & Gas coverage for high-risk sectors. Visit the Specialty Lines page for more information.";
    } else if (lowerInput.includes("about")) {
      botReply =
        "Visit the About Us page to learn more about Thrive Insurance Brokers and our mission.";
    } else if (
      lowerInput.includes("team") ||
      lowerInput.includes("management") ||
      lowerInput.includes("board")
    ) {
      botReply =
        "Meet our team on the Board of Directors, Management Team, and Other Team Members pages.";
    } else if (
      lowerInput.includes("contact") ||
      lowerInput.includes("help") ||
      lowerInput.includes("support")
    ) {
      botReply =
        "You can reach us via the Contact Us page, WhatsApp chat, or our desk lines below the navbar for assistance.";
    } else if (
      lowerInput.includes("quote") ||
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("premium")
    ) {
      botReply =
        "Insurance premiums vary by product and coverage. Please specify the type of insurance you need for a personalized quote.";
    } else if (
      lowerInput.includes("cover") ||
      lowerInput.includes("coverage") ||
      lowerInput.includes("policy")
    ) {
      botReply =
        "We offer a wide range of insurance policies: Life, Property, Motor, Liability, Engineering, Pecuniary, Travel, and Specialty Lines. Ask about any for more info!";
    } else if (
      lowerInput.includes("license") ||
      lowerInput.includes("regulate") ||
      lowerInput.includes("ncrib") ||
      lowerInput.includes("naicom")
    ) {
      botReply =
        "Yes, we are fully licensed and regulated by the Nigerian Council of Registered Insurance Brokers (NCRIB) and NAICOM.";
    } else if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("good morning") ||
      lowerInput.includes("good afternoon") ||
      lowerInput.includes("good evening") ||
      lowerInput.includes("greetings") ||
      lowerInput.includes("hey") ||
      lowerInput.includes("how are you") ||
      lowerInput.includes("what's up") ||
      lowerInput.includes("howdy") ||
      lowerInput.includes("nice to meet you") ||
      lowerInput.includes("pleased to meet you")
    ) {
      botReply = "Hello! How can I assist you with your insurance needs today?";
    } else if (
      lowerInput.includes("thanks") ||
      lowerInput.includes("thank you")
    ) {
      botReply =
        "You're welcome! Let us know if you have more questions about insurance.";
    } else if (lowerInput.includes("not found") || lowerInput.includes("404")) {
      botReply =
        "If you see a 404 error, the page may not exist. Use the navigation menu to find what you need or contact us for help.";
    }

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    }, 800);
    setInput("");
  };

  // Clear messages and restore default
  const handleClear = () => {
    setMessages(defaultMessages);
  };

  // Feature: close chatbot with Escape key
  React.useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  return (
    <div className="chatbot-container">
      {open ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Thrive Insurance Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div
            className="chatbot-messages"
            style={{ maxHeight: 300, overflowY: "auto" }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div
            className="chatbot-input"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              gap: 8,
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{ width: "100%", minWidth: 0 }}
            />
            <button onClick={handleSend} style={{ minWidth: 70 }}>
              Send
            </button>
            <button onClick={handleClear} style={{ minWidth: 70 }}>
              Clear
            </button>
          </div>
        </div>
      ) : (
        <button className="chatbot-fab" onClick={() => setOpen(true)}>
          <FaComments size={24} /> ChatBot
        </button>
      )}
    </div>
  );
};

export default Chatbot;
