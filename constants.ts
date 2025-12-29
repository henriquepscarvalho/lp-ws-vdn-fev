import { Target, Monitor, Search, Repeat, Magnet, ArrowRightCircle } from 'lucide-react';
import { StepItem, BonusItem, Mentor, FaqItem } from './types';

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: "O POSICIONAMENTO (Método PHD)",
    description: "Descubra onde sua Paixão, Habilidade e Dinheiro se encontram e encontre sua 'Vaca Roxa' (seu diferencial único no mercado).",
    icon: Target
  },
  {
    id: 2,
    title: "A CRIAÇÃO TÉCNICA",
    description: "Saia com o DNA da sua newsletter pronto: nome, logo, identidade visual e configuração prática na ferramenta Beehiiv.",
    icon: Monitor
  },
  {
    id: 3,
    title: "RAIO-X E JANELA DE OURO",
    description: "Aprenda a pesquisa que qualifica leads e monte a sequência de boas-vindas de 7 dias que transforma desconhecidos em fãs.",
    icon: Search
  },
  {
    id: 4,
    title: "CONTEÚDO INFINITO (CMS + MMC)",
    description: "A técnica 'Conteúdo Memorável Semanal' e como multiplicar magicamente um e-mail em posts virais para o Instagram (trabalhe menos, produza mais).",
    icon: Repeat
  },
  {
    id: 5,
    title: "ATRAÇÃO DE LEADS",
    description: "Crie seu 'Artefato de Valor' (isca digital) e aprenda a estrutura de anúncios simples para captar leads qualificados no piloto automático.",
    icon: Magnet
  },
  {
    id: 6,
    title: "FLECHA DE OURO (Vendas)",
    description: "A campanha de 3 e-mails ultra-efetiva e o método para vender produtos de R$ 2k a R$ 5k+ direcionando para o WhatsApp.",
    icon: ArrowRightCircle
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: "Blueprint Completo do Workshop",
    value: "R$ 497",
    description: "O mapa visual passo a passo para você nunca se perder na implementação."
  },
  {
    id: 2,
    title: "100 Emails com Maior Taxa de Abertura",
    value: "R$ 97",
    description: "Copie e modele os títulos que comprovadamente funcionam (baseado em dados reais)."
  },
  {
    id: 3,
    title: "Checklist - Primeira Venda em 30 Dias",
    value: "R$ 197",
    description: "O passo a passo validado para fazer dinheiro rápido, mesmo começando do zero."
  },
  {
    id: 4,
    title: "Calculadora de ROI para Newsletter",
    value: "R$ 197",
    description: "Planeje seu crescimento financeiro com dados reais de mercado."
  },
  {
    id: 5,
    title: "Template para Anúncio no Meta Ads",
    value: "R$ 97",
    description: "Copy, criativo e segmentação já testados para crescer sua lista."
  }
];

export const MENTORS: Mentor[] = [
  {
    name: "Henrique Carvalho (HC)",
    role: "Escritor e fundador do Viver de Blog",
    bio: "Faturou mais de R$ 10 milhões usando apenas e-mail marketing e conteúdo escrito. Acredita que 'A escrita liberta'.",
    image: "https://picsum.photos/id/1062/400/400" // Placeholder
  },
  {
    name: "Lucas",
    role: "Copywriter e Estrategista",
    bio: "Vendeu mais de R$ 200 milhões em campanhas na Empiricus, a maior empresa de newsletter financeira do Brasil.",
    image: "https://picsum.photos/id/1025/400/400" // Placeholder
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Não tenho tempo para escrever.",
    answer: "Você gasta 13 horas por semana no Instagram para alcançar 5% da audiência. Uma newsletter leva 2 horas por semana para alcançar 40%. Newsletter não gasta tempo, ela salva tempo."
  },
  {
    question: "Funciona para o meu nicho?",
    answer: "Se você vende Conhecimento, Experiência ou Transformação, funciona. Já vimos funcionar para advogados, nutricionistas, arquitetos e terapeutas."
  },
  {
    question: "Preciso ser um grande escritor?",
    answer: "Não. E-mail é conversa, não literatura. Se você sabe explicar seu trabalho numa conversa de café ou mandar um WhatsApp, você sabe escrever uma newsletter."
  }
];
