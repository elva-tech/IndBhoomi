import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-forest text-beige py-28">
      <div className="max-w-7xl mx-auto px-8 grid gap-20 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-gold mb-4">
            CONTACT US
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Business & Partnership <br /> Enquiries
          </h2>

          <p className="text-beige/80 text-lg leading-relaxed mb-10">
            For bulk sourcing, strategic partnerships, certifications, or
            long-term supply arrangements, please share your requirements.
            Our team will respond promptly.
          </p>

          <div className="space-y-3 text-beige/80">
            <p><strong>Operations:</strong> India & Uganda</p>
            <p><strong>Email:</strong> contact@indbhoomi.com</p>
            <p><strong>Working Hours:</strong> Mon – Fri, 9:00–18:00 IST</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-10"
        >
          {status === "success" ? (
            <div className="text-gold text-xl font-serif">
              Thank you. Your message has been sent successfully.
            </div>
          ) : (
            <div className="grid gap-6">

              {/* Required fields */}
              <input
                name="full_name"
                required
                placeholder="Full Name *"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Business Email *"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <input
                name="company"
                required
                placeholder="Company / Organization *"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <input
                name="country"
                required
                placeholder="Country *"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              {/* Optional but important */}
              {/* <select
                name="interest"
                required
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              >
                <option value="">Area of Interest *</option>
                <option>Essential Oils</option>
                <option>Spices</option>
                <option>Forest Honey</option>
                <option>Bulk Procurement</option>
                <option>Strategic Partnership</option>
              </select> */}

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Describe your requirement *"
                className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-gold"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-4 border border-gold px-8 py-3 text-gold hover:bg-gold hover:text-forest transition disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Submit Enquiry"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again later.
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
