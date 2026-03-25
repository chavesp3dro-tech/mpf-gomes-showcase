import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_LINKS } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Fale conosco via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)]" />
    </motion.a>
  );
};

export default WhatsAppButton;
