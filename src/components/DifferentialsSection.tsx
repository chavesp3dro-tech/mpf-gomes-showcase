import { motion } from "framer-motion";
import { Shield, Lightbulb, Clock, Users, Ruler, Award } from "lucide-react";

const differentials = [
  { icon: Users, title: "Equipe Qualificada", description: "Profissionais especializados com anos de experiência no mercado." },
  { icon: Lightbulb, title: "Inovação em Design", description: "Projetos modernos e criativos, sempre acompanhando as tendências." },
  { icon: Clock, title: "Cumprimento de Prazos", description: "Compromisso com cronogramas e entregas pontuais em todos os projetos." },
  { icon: Shield, title: "Garantia de Serviços", description: "Todos os nossos serviços possuem garantia de qualidade e durabilidade." },
  { icon: Ruler, title: "Atendimento Personalizado", description: "Soluções sob medida para cada necessidade e tipo de projeto." },
  { icon: Award, title: "Tecnologia de Ponta", description: "Equipamentos modernos para o melhor acabamento e precisão." },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-metallic-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-deep-blue-light tracking-widest uppercase mb-3 block">Nossos Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient-metallic mb-4">
            Por Que Escolher a MPF Gomes?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 group hover:shadow-blue-glow hover:border-deep-blue-light/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-deep-blue/20 transition-colors">
                <diff.icon className="w-6 h-6 text-deep-blue-light" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{diff.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
