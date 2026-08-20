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
    slug: 'antes-de-solicitar-orientacao',
    title: 'Antes de solicitar orientação',
    description: 'Organize documentos, datas e informações essenciais para explicar a situação com clareza.',
    introduction:
      'Uma preparação simples ajuda o atendimento a ser mais claro e evita que informações importantes fiquem de fora.',
    steps: [
      { title: 'Conte o que aconteceu', text: 'Escreva os fatos em ordem de data, indicando pessoas, órgãos, locais e acontecimentos importantes.' },
      { title: 'Defina o que você precisa', text: 'Anote sua principal dúvida e qual solução, informação ou encaminhamento está buscando.' },
      { title: 'Separe os documentos', text: 'Reúna cópias legíveis de contratos, avisos, mensagens, comprovantes e outros registros relacionados.' },
      { title: 'Registre o atendimento', text: 'Guarde a data, o canal utilizado, o nome do atendente, o protocolo informado e o prazo de resposta.' },
    ],
    checklist: [
      'Documento de identificação e comprovante de endereço, quando exigidos',
      'Resumo dos fatos com datas, nomes e locais',
      'Cópias legíveis dos documentos relacionados',
      'Mensagens, comprovantes e protocolos anteriores',
    ],
    attention: 'Não entregue documentos originais sem recibo. Antes de enviar dados pessoais, confirme se o canal é oficial e se todas as informações solicitadas são realmente necessárias.',
    links: [{ label: 'Buscar serviços no portal Gov.br', href: 'https://www.gov.br/pt-br/servicos' }],
  },
  {
    slug: 'como-localizar-um-servico-publico',
    title: 'Como localizar um serviço público',
    description: 'Identifique o órgão responsável, consulte os canais oficiais e registre o número do atendimento.',
    introduction: 'O caminho correto depende do assunto e de quem presta o serviço: município, estado ou Governo Federal.',
    steps: [
      { title: 'Identifique o assunto', text: 'Defina se a necessidade envolve saúde, assistência social, educação, documentos, trabalho ou outra área.' },
      { title: 'Procure no canal oficial', text: 'Pesquise pelo nome do serviço e confirme o órgão responsável, o público atendido e a área de abrangência.' },
      { title: 'Confira os requisitos', text: 'Leia quais documentos são exigidos, se há custo, como solicitar e qual é o prazo previsto.' },
      { title: 'Acompanhe a solicitação', text: 'Anote o protocolo e o prazo. Se necessário, procure a ouvidoria do órgão ou utilize o Fala.BR quando aplicável.' },
    ],
    checklist: [
      'Nome correto do serviço e do órgão responsável',
      'Público atendido e requisitos para solicitar',
      'Documentos, custos e prazo informado',
      'Protocolo e canal para acompanhamento',
    ],
    attention: 'Antes de informar dados, confira o endereço do site e os contatos publicados pelo próprio órgão. Páginas federais oficiais utilizam o domínio gov.br.',
    links: [
      { label: 'Pesquisar serviços públicos', href: 'https://www.gov.br/pt-br/servicos' },
      { label: 'Acessar a plataforma Fala.BR', href: 'https://falabr.cgu.gov.br/v2/' },
    ],
  },
  {
    slug: 'protecao-de-dados-pessoais',
    title: 'Proteção de dados pessoais',
    description: 'Evite enviar documentos sensíveis por canais não confirmados e verifique a finalidade da solicitação.',
    introduction: 'Dados pessoais devem ser usados com cuidado. Confirme quem está solicitando, para qual finalidade e quais informações são indispensáveis.',
    steps: [
      { title: 'Confirme o canal', text: 'Verifique o contato no site oficial da instituição. Não confie apenas em links recebidos por mensagem.' },
      { title: 'Pergunte a finalidade', text: 'Entenda por que cada dado é necessário, como será utilizado e se poderá ser compartilhado.' },
      { title: 'Envie somente o necessário', text: 'Oculte informações sem relação com o pedido e evite redes públicas ao transmitir documentos.' },
      { title: 'Guarde os registros', text: 'Mantenha comprovantes e protocolos. Você pode solicitar acesso, correção e outras medidas previstas na LGPD.' },
    ],
    checklist: [
      'Identidade e contato oficial de quem solicita',
      'Finalidade informada para o uso dos dados',
      'Somente os dados e documentos indispensáveis',
      'Conexão segura e comprovante do envio',
    ],
    attention: 'Nunca informe senha, código de verificação, senha bancária ou código de recuperação. Se suspeitar de fraude, altere suas senhas, ative a verificação em duas etapas e procure os canais oficiais.',
    links: [
      { label: 'Conhecer seus direitos sobre dados pessoais', href: 'https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares' },
      { label: 'Gerenciar o uso de dados na conta Gov.br', href: 'https://www.gov.br/governodigital/pt-br/identidade/gerenciar-o-uso-dos-seus-dados-pessoais' },
    ],
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
