export const organization = {
  legalName: 'Instituto Brasil Global de Direitos Humanos - IBGDH',
  shortName: 'IBGDH',
  cnpj: '68.644.233/0001-60',
  address: 'Rua das Laranjeiras, nº 192, apartamento 602, bloco I',
  district: 'Laranjeiras',
  cityState: 'Rio de Janeiro/RJ',
  zipCode: '22.240-003',
  purpose: 'Direitos Humanos na prática, perto de quem precisa.',
  mission:
    'Defender, promover e difundir os Direitos Humanos por meio de linguagem acessível, atuação prática e compromisso permanente com a transformação social.',
  values: ['Dignidade', 'Justiça', 'Liberdade', 'Equidade', 'Humanidade'],
}

export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || '',
}

export const actionAreas = [
  {
    slug: 'acesso-a-justica',
    title: 'Acesso à Justiça',
    short: 'Orientação humanizada e caminhos claros para a proteção de direitos.',
    description:
      'Conteúdos, encaminhamentos e iniciativas para aproximar o Direito da realidade cotidiana da população.',
  },
  {
    slug: 'direitos-e-inclusao',
    title: 'Direitos e Inclusão',
    short: 'Proteção de mulheres, crianças, adolescentes, idosos e pessoas com deficiência.',
    description:
      'Ações educativas e institucionais voltadas à dignidade, à igualdade e ao enfrentamento das vulnerabilidades.',
  },
  {
    slug: 'assistencia-e-previdencia',
    title: 'Assistência e Previdência',
    short: 'Informação acessível sobre benefícios, serviços públicos e proteção social.',
    description:
      'Orientação sobre documentação, critérios e canais responsáveis pela assistência social e previdenciária.',
  },
  {
    slug: 'educacao-e-liderancas',
    title: 'Educação e Lideranças',
    short: 'Formação cidadã, pesquisa e desenvolvimento de lideranças sociais.',
    description:
      'Cursos, encontros, publicações e projetos de fortalecimento comunitário e institucional.',
  },
  {
    slug: 'saude-e-dignidade',
    title: 'Saúde e Dignidade',
    short: 'Informação e promoção do acesso responsável a serviços de saúde.',
    description:
      'Conteúdos educativos, iniciativas de prevenção e articulação com profissionais e instituições habilitadas.',
  },
  {
    slug: 'cidadania-economica',
    title: 'Cidadania Econômica',
    short: 'Educação financeira, inclusão produtiva e autonomia para trabalhadores e famílias.',
    description:
      'Conhecimento prático para planejamento, formalização, desenvolvimento e construção de patrimônio.',
  },
  {
    slug: 'igualdade-racial',
    title: 'Igualdade Racial',
    short: 'Combate à discriminação, valorização da diversidade e inclusão social.',
    description:
      'Projetos e conteúdos voltados à equidade, ao respeito e à ampliação de oportunidades.',
  },
  {
    slug: 'transparencia-e-politicas-publicas',
    title: 'Transparência e Políticas Públicas',
    short: 'Controle social, pesquisa e fortalecimento das instituições democráticas.',
    description:
      'Estudos, propostas, indicadores e espaços de participação para aperfeiçoar serviços e políticas públicas.',
  },
]

export const projects = [
  {
    title: 'BRINVEST Trabalhador Investidor',
    category: 'Cidadania econômica',
    status: 'Em estruturação',
    summary:
      'Programa de educação financeira, inclusão econômica, formalização produtiva e formação de patrimônio da classe trabalhadora.',
    featured: true,
  },
  {
    title: 'Direitos em Linguagem Simples',
    category: 'Educação cidadã',
    status: 'Em estruturação',
    summary:
      'Biblioteca pública com guias objetivos, perguntas frequentes e orientações organizadas por necessidade.',
    featured: true,
  },
  {
    title: 'Observatório de Direitos Humanos',
    category: 'Pesquisa',
    status: 'Planejado',
    summary:
      'Espaço para estudos, notas técnicas, indicadores, relatórios e propostas de aprimoramento institucional.',
    featured: false,
  },
]

export const simpleGuides = [
  {
    title: 'Antes de solicitar orientação',
    description: 'Organize documentos, datas e informações essenciais para explicar a situação com clareza.',
  },
  {
    title: 'Como localizar um serviço público',
    description: 'Identifique o órgão responsável, consulte os canais oficiais e registre o número do atendimento.',
  },
  {
    title: 'Proteção de dados pessoais',
    description: 'Evite enviar documentos sensíveis por canais não confirmados e verifique a finalidade da solicitação.',
  },
]

export const primaryCnae = {
  code: '88.00-6-00',
  description: 'Serviços de assistência social sem alojamento',
}

export const secondaryCnaes = [
  ['85.50-3-02', 'Atividades de apoio à educação, exceto caixas escolares'],
  ['85.99-6-04', 'Treinamento em desenvolvimento profissional e gerencial'],
  ['86.30-5-03', 'Atividade médica ambulatorial restrita a consultas'],
  ['86.90-9-99', 'Outras atividades de atenção à saúde humana não especificadas anteriormente'],
  ['91.02-3-01', 'Atividades de museus e de exploração de lugares e prédios históricos e atrações similares'],
  ['91.02-3-02', 'Restauração e conservação de lugares e prédios históricos'],
  ['94.93-6-00', 'Atividades de organizações associativas ligadas à cultura e à arte'],
] as const
