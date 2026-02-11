import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Estruturas metálicas e vidraçaria" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 border border-metallic/30 rounded-full">
            <span className="text-sm font-body text-metallic tracking-widest uppercase">Serralheria & Vidraçaria</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-800 leading-tight mb-6">
            <span className="text-gradient-metallic">MPF Gomes:</span>{" "}
            <span className="text-foreground">Excelência em Serralheria e Vidraçaria</span>
          </h1>

          <p className="text-lg sm:text-xl font-body text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Soluções sob medida para todos os segmentos — Qualidade, Inovação e Durabilidade para seu projeto comercial ou industrial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-steel-gradient px-8 py-4 rounded-lg font-heading font-semibold text-primary-foreground shadow-blue-glow transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Solicite um Orçamento
            </motion.a>

            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-metallic/30 font-heading font-semibold text-metallic hover:bg-muted transition-all"
            >
              Conheça Nossos Serviços
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Geometric accent lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
