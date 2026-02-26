import { useState } from "react";
import '../CSS/Contact.css';

export default function Shop() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const send = () => {
    const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
    if (!whatsapp) return;

    if (!name || !phone || !message) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    const text = `
Hello, I am ${name}.
Phone: ${phone}

Message:
${message}
    `.trim();

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-form">
          {error && <p className="error">{error}</p>}

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Your Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={send}>Send via WhatsApp</button>
        </div>

        <div className="contact-address">
          <h2>Location</h2>
          <p>
            We are located within <strong>Kakamega CBD</strong> — 50 meters from
            <strong> Equity Bank</strong> inside
            <strong> Ambwere Plaza</strong>.
          </p>

          <ul>
            <li>Email: info@autohub.com</li>
            <li>Phone: +254 700 000 000</li>
            <li>Website: www.autohub.com</li>
            <li>Kakamega Town</li>
          </ul>
        </div>
      </div>
    </div>
  );
}