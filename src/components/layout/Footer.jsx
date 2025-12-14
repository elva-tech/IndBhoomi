import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-beige">
      <div className="mx-auto max-w-7xl px-8 py-20">
        {/* Top */}
        <div className="grid gap-16 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-6">
              IndBhoomi
            </h3>
            <p className="text-beige/70 leading-relaxed">
              A vertically integrated agricultural company cultivating
              high-value essential oils, spices, and forest honey using
              sustainable, export-grade practices.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-sm tracking-widest text-beige/60">
              COMPANY
            </h4>
            <ul className="space-y-3 text-beige/80">
              <li>
                {/* <button
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gold transition"
                >
                  About Us
                </button> */}
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gold transition"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("value")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gold transition"
                >
                  Value Proposition
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("ourteam")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gold transition"
                >
                  Our Team
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm tracking-widest text-beige/60">
              CONTACT
            </h4>
            <ul className="space-y-4 text-beige/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold" />
                <span>
                  Uganda & India<br />
                  Global sourcing regions
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>info@indbhoomi.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+91 9611149957</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-6 text-sm tracking-widest text-beige/60">
              PARTNERSHIPS
            </h4>
            <p className="mb-6 text-beige/70 leading-relaxed">
              For B2B inquiries, sourcing partnerships, and bulk orders.
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center border border-gold px-8 py-3 text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest transition"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-beige/60">
          <p>
            © {new Date().getFullYear()} IndBhoomi. All rights reserved.
          </p>
          <p>
            Crafted for global supply chains
          </p>
        </div>
      </div>
    </footer>
  );
}
