import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ANIMATION } from "@/lib/constants";

const testimonials = [
  {
    name: "Carlos Almeida",
    company: "Construtora Almeida & Filhos",
    text: "A MPF Gomes superou todas as nossas expectativas. O acabamento das estruturas metálicas do nosso galpão ficou impecável. Profissionalismo e qualidade do início ao fim.",
    rating: 5,
  },
  {
    name: "Ana Paula Santos",
    company: "Loja Vitrine Premium",
    text: "A fachada de vidro da nossa loja ficou simplesmente espetacular. A equipe da MPF Gomes foi extremamente atenciosa e entregou no prazo. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "Roberto Ferreira",
    company: "Indústria Ferreira Ltda",
    text: "Contratamos a MPF Gomes para a construção do mezanino da nossa fábrica. Trabalho de primeira qualidade, com total atenção às normas de segurança. Parceiros de confiança.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-deep-blue-light tracking-widest uppercase mb-3 block">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient-metallic mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * ANIMATION.staggerDelay }}
              className="glass-effect bg-card/40 border border-border/50 rounded-xl p-8 relative hover:shadow-blue-glow hover:border-deep-blue-light/50 hover:bg-card/60 transition-all duration-300 backdrop-blur-md"
            >
              <Quote className="w-8 h-8 text-deep-blue-light/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-deep-blue-light text-deep-blue-light" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-heading font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-metallic font-body">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
