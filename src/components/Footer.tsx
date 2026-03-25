import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, CONTACT } from "@/lib/constants";

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
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground font-body hover:text-deep-blue-light transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground font-body hover:text-deep-blue-light transition-colors"
              >
                <Phone className="w-4 h-4 text-deep-blue-light" />
                {CONTACT.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground font-body hover:text-deep-blue-light transition-colors"
              >
                <Mail className="w-4 h-4 text-deep-blue-light" />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 text-deep-blue-light flex-shrink-0" />
                {CONTACT.location}
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
