import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient-metallic mb-4">MPF Gomes</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Serralheria e Vidraçaria de excelência. Qualidade, inovação e durabilidade em todos os projetos.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {["Início", "Sobre", "Serviços", "Diferenciais", "Depoimentos"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-sm text-muted-foreground font-body hover:text-deep-blue-light transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+5500000000000" className="flex items-center gap-3 text-sm text-muted-foreground font-body hover:text-deep-blue-light transition-colors">
                <Phone className="w-4 h-4 text-deep-blue-light" />
                (00) 00000-0000
              </a>
              <a href="mailto:contato@mpfgomes.com.br" className="flex items-center gap-3 text-sm text-muted-foreground font-body hover:text-deep-blue-light transition-colors">
                <Mail className="w-4 h-4 text-deep-blue-light" />
                contato@mpfgomes.com.br
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 text-deep-blue-light flex-shrink-0" />
                Sua Cidade - Estado
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} MPF Gomes Serralheria e Vidraçaria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
