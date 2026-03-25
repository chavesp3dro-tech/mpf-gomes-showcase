import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, WHATSAPP_LINKS } from "@/lib/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="font-heading font-bold text-xl text-gradient-metallic">
            MPF Gomes
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-steel-gradient px-5 py-2 rounded-lg text-sm font-heading font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-steel-gradient px-5 py-3 rounded-lg text-sm font-heading font-semibold text-primary-foreground text-center hover:opacity-90 transition-opacity"
              >
                Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
