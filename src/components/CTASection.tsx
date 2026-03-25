import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="py-24 bg-metallic-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic/20 to-transparent" />
      
      {/* Geometric background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-metallic rotate-45" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-metallic rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gradient-metallic mb-6 leading-tight">
            Transforme Seu Projeto em Realidade!
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-10 max-w-2xl mx-auto">
            Solicite um orçamento agora e garanta a qualidade MPF Gomes. Nossa equipe está pronta para atender você.
          </p>

          <motion.a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-steel-gradient px-12 py-5 rounded-lg font-heading font-bold text-lg text-primary-foreground shadow-blue-glow hover:opacity-90 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Orçamento Rápido via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
