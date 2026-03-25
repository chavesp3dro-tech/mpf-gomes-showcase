/**
 * Constantes globais do projeto MPF Gomes
 * Centraliza dados sensíveis e configurações para fácil manutenção
 */

// Contato
export const CONTACT = {
  whatsapp: "+5521981760720",
  phone: "+5521981760720",
  email: "pfgomes.servicos@gmail.com",
  emailDisplay: "contato@mpfgomes.com.br",
  location: "Rio de Janeiro - Brasil",
} as const;

// URLs de WhatsApp com mensagens contextuais
export const WHATSAPP_LINKS = {
  general: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de solicitar um orçamento.`,
  services: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de saber mais sobre os serviços da MPF Gomes.`,
  serralheria: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=Olá! Tenho interesse em um orçamento para Serralheria.`,
  vidracaria: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=Olá! Tenho interesse em um orçamento para Vidraçaria.`,
  referral: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=Olá! Gostaria de saber mais sobre o programa de indicação.`,
} as const;

// Navegação
export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
] as const;

// Informações da empresa
export const COMPANY = {
  name: "MPF Gomes",
  tagline: "Serralheria & Vidraçaria",
  description: "Soluções sob medida para todos os segmentos — Qualidade, Inovação e Durabilidade para seu projeto comercial ou industrial.",
  fullDescription: "Serralheria e Vidraçaria de excelência. Qualidade, inovação e durabilidade em todos os projetos.",
} as const;

// Configurações de animação
export const ANIMATION = {
  duration: 0.8,
  easeOut: "easeOut",
  staggerDelay: 0.1,
  scrollRevealDelay: 0.5,
} as const;

// Configurações de performance
export const PERFORMANCE = {
  imageOptimization: true,
  lazyLoading: true,
  preferredFormat: "webp",
} as const;
