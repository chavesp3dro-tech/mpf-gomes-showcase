import { motion } from "framer-motion";
import serviceSerralheria from "@/assets/service-serralheria.jpg";
import serviceVidracaria from "@/assets/service-vidracaria.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceVidracariaInd from "@/assets/service-vidracaria-ind.jpg";
import { useState } from "react";

const categories = ["Todos", "Serralheria", "Vidraçaria", "Industrial"];

const projects = [
  { title: "Portão Comercial em Aço Inox", category: "Serralheria", image: serviceSerralheria, description: "Projeto personalizado com acabamento premium para fachada comercial." },
  { title: "Fachada em Vidro Temperado", category: "Vidraçaria", image: serviceVidracaria, description: "Fachada moderna com vidro temperado de alta resistência." },
  { title: "Mezanino Industrial", category: "Industrial", image: serviceIndustrial, description: "Estrutura reforçada para suportar cargas pesadas com total segurança." },
  { title: "Box de Vidro sob Medida", category: "Vidraçaria", image: serviceVidracariaInd, description: "Box com vidro temperado e ferragens de alta qualidade." },
  { title: "Escada Metálica Helicoidal", category: "Serralheria", image: serviceSerralheria, description: "Design moderno com estrutura em aço carbono e acabamento galvanizado." },
  { title: "Cobertura de Vidro", category: "Industrial", image: serviceVidracaria, description: "Cobertura com vidro laminado para áreas de convivência industrial." },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-metallic-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metallic/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-body text-deep-blue-light tracking-widest uppercase mb-3 block">Portfólio</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient-metallic mb-4">
            Projetos Realizados
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-medium transition-all ${
                activeCategory === cat
                  ? "bg-steel-gradient text-primary-foreground shadow-blue-glow"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              layout
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-blue-glow transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <span className="text-xs font-body text-deep-blue-light uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
