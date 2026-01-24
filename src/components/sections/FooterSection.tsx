// src/components/sections/FooterSection.tsx
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-red-600/20 bg-red-600/5">
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2 italic">
                Jeremiah
              </h3>
              <p className="text-sm text-gray-600">
                Building bold, secure digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                Navigate
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Work", href: "#work" },
                  { label: "Values", href: "#values" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-red-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "LinkedIn", href: "#" },
                  { label: "Twitter", href: "#" },
                  { label: "GitHub", href: "#" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-red-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-red-600/10 pt-8">
            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
              <p>
                © {currentYear} Jeremiah Jideofor. All rights reserved.
              </p>
              <p>
                Crafted with precision and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
