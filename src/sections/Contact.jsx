import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full max-w-xl px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="mt-16 flex justify-center">
          <div className="flex-center card-border rounded-xl p-10 w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
            >
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What’s your good name?"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What’s your email address?"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>

              <button 
  type="submit" 
  className="w-full sm:w-auto"
>
  <div className="cta-button group flex items-center justify-center gap-2 w-full sm:w-auto">
    <div className="bg-circle" />
    <p className="text whitespace-nowrap text-center w-full sm:w-auto">
      {loading ? "Sending..." : "Send Message"}
    </p>
    {/* Arrow only visible on sm (laptop/desktop) and above */}
    <div className="arrow-wrapper ml-2 hidden sm:flex">
      <img 
        src="/images/arrow-down.svg" 
        alt="arrow" 
        className="w-4 h-4 sm:w-5 sm:h-5" 
      />
    </div>
  </div>
</button>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
