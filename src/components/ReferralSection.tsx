import { motion } from "framer-motion";
import { Gift, TrendingUp, Users, CheckCircle } from "lucide-react";
import { WHATSAPP_LINKS, ANIMATION } from "@/lib/constants";

const benefits = [
  {
    icon: TrendingUp,
    title: "Comissão Atrativa",
    description: "Ganhe 5-10% sobre o valor bruto de cada contrato fechado através de sua indicação.",
  },
  {
    icon: Users,
    title: "Sem Limite de Ganhos",
    description: "Quanto mais clientes você indicar, mais você ganha. Sem limite de comissões.",
  },
  {
    icon: CheckCircle,
    title: "Pagamento Garantido",
    description: "Receba sua comissão assim que o cliente confirmar o pagamento do serviço.",
  },
  {
    icon: Gift,
    title: "Suporte Completo",
    description: "Fornecemos materiais de marketing e suporte total para suas indicações.",
  },
];

const ReferralSection = () => {
  return (
    <section id="indicacao" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-deep-blue-light tracking-widest uppercase mb-3 block">Ganhe Comissionando</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient-metallic mb-4">
            Programa de Indicação MPF Gomes
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Indique clientes para a MPF Gomes e ganhe comissão por cada contrato fechado. Uma forma simples e lucrativa de expandir sua rede.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * ANIMATION.staggerDelay }}
              className="glass-effect bg-card/40 border border-border/50 rounded-xl p-6 hover:shadow-blue-glow hover:border-deep-blue-light/50 hover:bg-card/60 transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-4 backdrop-blur-sm">
                <benefit.icon className="w-6 h-6 text-deep-blue-light" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-metallic-gradient rounded-xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-2xl font-heading font-bold text-gradient-metallic mb-8 text-center">
            Como Funciona?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-steel-gradient flex items-center justify-center text-white font-heading font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Cadastre-se</h4>
              <p className="text-sm text-muted-foreground font-body">
                Fale conosco e registre-se no programa de indicação.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-steel-gradient flex items-center justify-center text-white font-heading font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Indique Clientes</h4>
              <p className="text-sm text-muted-foreground font-body">
                Compartilhe seu link único com potenciais clientes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-steel-gradient flex items-center justify-center text-white font-heading font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Receba Comissão</h4>
              <p className="text-sm text-muted-foreground font-body">
                Ganhe 5-10% quando o cliente confirmar o pagamento.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={WHATSAPP_LINKS.referral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-steel-gradient px-10 py-4 rounded-lg font-heading font-semibold text-primary-foreground shadow-blue-glow hover:opacity-90 transition-all"
          >
            Quero Participar do Programa
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralSection;
