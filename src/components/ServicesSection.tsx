import { motion } from "framer-motion";
import serviceSerralheria from "@/assets/service-serralheria.jpg";
import serviceVidracaria from "@/assets/service-vidracaria.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceVidracariaInd from "@/assets/service-vidracaria-ind.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Serralheria Comercial",
    description: "Portões, grades, estruturas metálicas para lojas, corrimãos e escadas com acabamento impecável.",
    image: serviceSerralheria,
    items: ["Portões Automatizados", "Grades e Corrimãos", "Estruturas para Lojas", "Escadas Metálicas"],
  },
  {
    title: "Serralheria Industrial",
    description: "Estruturas pesadas, mezaninos, galpões, plataformas e guarda-corpos industriais de alta resistência.",
    image: serviceIndustrial,
    items: ["Mezaninos", "Galpões e Coberturas", "Plataformas", "Guarda-corpos Industriais"],
  },
  {
    title: "Vidraçaria Comercial",
    description: "Fachadas, portas de vidro, vitrines, espelhos, box para banheiro e guarda-corpos de vidro.",
    image: serviceVidracaria,
    items: ["Fachadas de Vidro", "Portas e Vitrines", "Box para Banheiro", "Guarda-corpos de Vidro"],
  },
  {
    title: "Vidraçaria Industrial",
    description: "Vidros de segurança, divisórias, coberturas e projetos especiais com vidro temperado e laminado.",
    image: serviceVidracariaInd,
    items: ["Vidros de Segurança", "Divisórias de Vidro", "Coberturas de Vidro", "Projetos Especiais"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-deep-blue-light tracking-widest uppercase mb-3 block">Nossos Serviços</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient-metallic mb-4">
            Soluções Completas em Metal e Vidro
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para atender às necessidades do seu projeto, do conceito à entrega final.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-blue-glow transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-heading font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground font-body mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-metallic font-body">
                      <ArrowRight className="w-3 h-3 text-deep-blue-light flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA mid-page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços da MPF Gomes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-steel-gradient px-10 py-4 rounded-lg font-heading font-semibold text-primary-foreground shadow-blue-glow hover:opacity-90 transition-all"
          >
            Solicite um Orçamento Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
