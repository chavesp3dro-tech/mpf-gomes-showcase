import { motion } from "framer-motion";
import { Award, Users, Clock, Wrench } from "lucide-react";

const stats = [
  { icon: Clock, label: "Anos de Experiência", value: "15+" },
  { icon: Wrench, label: "Projetos Realizados", value: "500+" },
  { icon: Users, label: "Clientes Satisfeitos", value: "300+" },
  { icon: Award, label: "Garantia de Qualidade", value: "100%" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-metallic-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-body text-deep-blue-light tracking-widest uppercase mb-3 block">Quem Somos</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient-metallic mb-6">
              Tradição e Inovação em Cada Projeto
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              A MPF Gomes é referência em serralheria e vidraçaria, atendendo com excelência os segmentos comercial e industrial. Com mais de 15 anos de experiência, nossa equipe altamente qualificada transforma ideias em realidade, sempre com foco na qualidade, segurança e satisfação do cliente.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Trabalhamos com os melhores materiais e tecnologia de ponta para entregar projetos que superam as expectativas. Do design à instalação, cada detalhe é cuidadosamente planejado para garantir durabilidade e acabamento impecável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-blue-glow transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-deep-blue-light mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient-metallic mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
