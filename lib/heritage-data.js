// Mock typed-shape data for Histórias que Ficam
// Shape allows new streets/places to be added without rebuilding components.

export const todayInHistory = {
  date: '15 de Junho · 1834',
  title: 'Fim das Ordens Religiosas em Portugal',
  excerpt:
    'Neste dia, o Estado decretou a extinção dos conventos masculinos, transformando profundamente o tecido urbano de muitas vilas portuguesas — incluindo o Fundão.',
}

export const featuredPlaces = [
  {
    id: 'rua-da-cale',
    slug: 'rua-da-cale',
    name: 'Rua da Cale',
    location: 'Fundão',
    lat: 40.13965,
    lng: -7.50105,
    pilot: true,
    image: 'https://images.unsplash.com/photo-1614807254023-133d1a7a3c41?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'O berço de uma figura ilustre, onde cada pedra guarda memória.',
  },
  {
    id: 'castelo-fundao',
    slug: 'castelo-do-fundao',
    name: 'Castelo do Fundão',
    location: 'Fundão',
    lat: 40.14250,
    lng: -7.49810,
    image: 'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'Sentinela de pedra que viu nascer e crescer uma comunidade serrana.',
  },
  {
    id: 'igreja-matriz',
    slug: 'igreja-matriz',
    name: 'Igreja Matriz',
    location: 'Fundão',
    lat: 40.13845,
    lng: -7.50025,
    image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'Centro espiritual e arquitectónico, séculos de fé e arte sacra.',
  },
  {
    id: 'praca-velha',
    slug: 'praca-velha',
    name: 'Praça Velha',
    location: 'Fundão',
    lat: 40.13780,
    lng: -7.50180,
    image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'O coração público da vila, onde se faziam feiras, festas e história.',
  },
]

export const streets = {
  'rua-da-cale': {
    slug: 'rua-da-cale',
    category: 'Fundão',
    title: 'Rua da Cale',
    subtitle: 'O berço de uma figura ilustre do Fundão',
    heroImage: 'https://images.unsplash.com/photo-1614807254023-133d1a7a3c41?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    audio: {
      title: 'Ouvir a história',
      src: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_27e35baad3.mp3',
      duration: 184,
    },
    paragraphs: [
      'Estreita e calcetada à mão, a Rua da Cale acompanha em silêncio o desenho antigo do Fundão. O seu nome é tantas vezes pronunciado quanto esquecido na origem — vem do latim popular cale, "caminho" ou "via", testemunho de quando aqui passavam mercadores, peregrinos e tropas.',
      'Foi nesta rua, numa casa simples de fachada caiada, que nasceu José Alves Monteiro — figura ilustre cujo nome se confunde com os feitos e a memória cultural do concelho. As janelas baixas e os umbrais de granito ainda guardam o pulso de uma vida que se fez longe, mas que aqui começou.',
      'Hoje, a Rua da Cale convida a uma caminhada lenta. Olhe para cima: brasões discretos, frestas, um sino distante. Cada porta é uma página.',
    ],
    expandable: {
      title: 'Saber Mais',
      body: [
        'No século XIX, a Rua da Cale era uma das principais artérias comerciais do Fundão. Aqui se instalavam ourives, sapateiros e tecedeiras, num movimento contínuo que fazia da rua um pequeno mercado a céu aberto.',
        'Os registos paroquiais confirmam que entre 1875 e 1910 viveram nesta rua mais de quarenta famílias diferentes, muitas delas ligadas às artes têxteis e à produção de cera. A campainha de bronze que hoje vemos no número 12 é um dos poucos exemplares originais que sobreviveram aos restauros do século XX.',
        'Em 1953, parte do calcetamento foi refeito com pedras provenientes da antiga muralha medieval — um detalhe pouco conhecido, mas que liga literalmente esta rua às origens defensivas da vila.',
      ],
    },
    tabs: [
      { id: 'historia', label: 'História' },
      { id: 'galeria', label: 'Galeria' },
      { id: 'curiosidades', label: 'Curiosidades' },
      { id: 'memorias', label: 'Memórias' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
      'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
      'https://images.unsplash.com/photo-1562195168-c82fea0f0953?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
      'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
    ],
    curiosities: [
      'O número "7" gravado num dos umbrais não corresponde a uma porta — é uma marca de cantaria do mestre Tomé Lourenço, ativo no Fundão entre 1860 e 1890.',
      'Durante muito tempo, foi proibido passar com carroças após o pôr-do-sol, por ordem da Câmara, para preservar o sossego dos moradores.',
      'A árvore que cresce ao fundo da rua é uma amoreira centenária, plantada para abastecer a antiga indústria da seda.',
    ],
    memories: [
      {
        author: 'Maria, 78 anos',
        text: '"Lembro-me das festas de Santo António, quando toda a rua se enchia de manjericos e luz. Era assim que sabíamos que o verão tinha chegado."',
      },
      {
        author: 'António, 65 anos',
        text: '"O meu pai contava-me que aqui era onde se faziam os melhores negócios — tudo se resolvia num aperto de mão, à porta da taberna do Sr. Joaquim."',
      },
    ],
    communityMemories: [
      {
        id: 'm1',
        name: 'Maria Fernanda',
        age: 78,
        ligacao: 'Moradora desde 1965',
        date: 'Maio 2025',
        text: 'Cresci ao número 14. Lembro-me do cheiro do pão acabado de cozer ao Sr. Aníbal, e do som dos socos da minha mãe a subir a calçada antes do sol. A rua tinha vida própria, falava connosco.',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
      },
      {
        id: 'm2',
        name: 'António Sousa',
        age: 65,
        ligacao: 'Filho da rua',
        date: 'Abril 2025',
        text: 'O meu avô tinha aqui a oficina de sapateiro. Em criança, sentava-me no degrau da porta a ver as senhoras a passar, com os cestos da praça, sempre uma palavra para nós.',
        photo: null,
      },
      {
        id: 'm3',
        name: 'Helena Carvalho',
        age: 52,
        ligacao: 'Família com raízes na rua',
        date: 'Março 2025',
        text: 'Quando a minha mãe casou em 1972, a rua inteira saiu à janela. Atiravam pétalas das varandas. Ainda hoje, quando passo aqui, ouço aquele silêncio em festa.',
        photo: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
      },
      {
        id: 'm4',
        name: 'Carlos Bento',
        age: 71,
        ligacao: 'Antiga residência',
        date: 'Fevereiro 2025',
        text: 'O Natal aqui era diferente. Cada porta era um presépio. Andávamos de casa em casa a cantar as Janeiras — recebíamos figos, nozes, e às vezes um copinho de licor.',
        photo: null,
      },
      {
        id: 'm5',
        name: 'Sofia Mendes',
        age: 34,
        ligacao: 'Visitante',
        date: 'Janeiro 2025',
        text: 'Vim pela primeira vez à procura das raízes da minha bisavó. Encontrei uma senhora que ainda se lembrava do nome dela. Saí daqui com mais família do que cheguei.',
        photo: 'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
      },
    ],
    personality: {
      slug: 'jose-alves-monteiro',
      name: 'José Alves Monteiro',
      dates: '1890 – ?',
      photo: 'https://images.unsplash.com/photo-1551763127-9fa66ee3e2a3?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
      bio: 'Nascido na Rua da Cale em 1890, José Alves Monteiro foi um dos nomes mais respeitados da cultura do Fundão. Professor, ensaísta e impulsionador de iniciativas associativas, o seu trabalho moldou gerações.',
    },
    related: [
      {
        slug: 'castelo-do-fundao',
        name: 'Castelo do Fundão',
        image: 'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        description: 'A fortaleza que velou pela vila durante séculos.',
      },
      {
        slug: 'igreja-matriz',
        name: 'Igreja Matriz',
        image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        description: 'Arte sacra e memória colectiva no coração do Fundão.',
      },
      {
        slug: 'praca-velha',
        name: 'Praça Velha',
        image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        description: 'O ponto de encontro de gerações inteiras.',
      },
    ],
  },
}

export function getStreet(slug) {
  return streets[slug] || null
}

// ============================================================
// PERSONALITIES — typed mock data. Add new entries by slug.
// ============================================================

export const personalities = {
  'jose-alves-monteiro': {
    slug: 'jose-alves-monteiro',
    fullName: 'José Alves Monteiro',
    eyebrow: 'Personalidade Ilustre · Fundão',
    dates: '1890 – ?',
    birthPlace: 'Rua da Cale, Fundão',
    role: 'Professor, ensaísta e impulsionador cultural',
    portrait: 'https://images.unsplash.com/photo-1551763127-9fa66ee3e2a3?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
    relatedStreet: { name: 'Rua da Cale', slug: 'rua-da-cale' },
    shortBio:
      'Nascido na Rua da Cale em 1890, José Alves Monteiro foi um dos nomes mais respeitados da cultura do Fundão. Professor, ensaísta e impulsionador de iniciativas associativas, o seu trabalho moldou gerações.',
    fullBio: [
      'José Alves Monteiro nasceu na casa de número 14 da Rua da Cale, numa família modesta ligada à pequena indústria da seda. Frequentou a escola primária local e, mais tarde, o liceu da Guarda, onde se distinguiu pela vocação para as letras e para o ensino.',
      'Regressou ao Fundão em 1912 já com formação de professor. Durante quase quatro décadas, leccionou em escolas da região e fundou círculos de leitura que aproximavam autores nacionais às populações rurais. Foi, para muitos, "o senhor professor" — figura tutelar de várias gerações.',
      'Para lá do ensino, dedicou-se ao estudo da história local. Publicou ensaios em jornais regionais sobre a toponímia do Fundão, a indústria da seda, as tradições religiosas e o papel das mulheres trabalhadoras na vila do início do século XX. Os seus textos continuam a ser uma fonte primária para investigadores.',
      'Participou activamente em iniciativas associativas: foi fundador da Sociedade Filarmónica do Fundão (1925), colaborou com a Casa do Povo e impulsionou a criação de uma pequena biblioteca pública — predecessora da actual biblioteca municipal.',
      'A data exacta da sua morte permanece incerta, perdida na desorganização dos arquivos do pós-guerra. Sabe-se, por testemunhos orais, que viveu pelo menos até aos anos 60.',
    ],
    gallery: [
      {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        caption: 'Casa natal na Rua da Cale, fotografia anterior aos restauros de 1953.',
      },
      {
        type: 'document',
        src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        caption: 'Manuscrito de aula sobre toponímia do Fundão, c. 1928.',
      },
      {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        caption: 'Rua da Cale, c. 1935. Arquivo Municipal do Fundão.',
      },
      {
        type: 'document',
        src: 'https://images.unsplash.com/photo-1568667256549-094345857637?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        caption: 'Recorte do "Jornal do Fundão" (1932) com ensaio sobre a indústria da seda.',
      },
    ],
    relatedPlaces: ['rua-da-cale', 'igreja-matriz', 'praca-velha'],
    sources: [
      { title: 'Arquivo Municipal do Fundão — registos paroquiais', type: 'Arquivo', year: '1890–1945' },
      { title: '"Jornal do Fundão" — colecção integral', type: 'Imprensa periódica', year: '1925–1960' },
      { title: 'Monteiro, J. A. — Ensaios reunidos', type: 'Livro', year: '1958' },
      { title: 'Sociedade Filarmónica do Fundão — actas de fundação', type: 'Arquivo associativo', year: '1925' },
      { title: 'Entrevistas orais a antigos alunos (recolha 2018)', type: 'História oral', year: '2018' },
    ],
  },
}

export function getPersonality(slug) {
  return personalities[slug] || null
}

export function getPlaceBySlug(slug) {
  return featuredPlaces.find((p) => p.slug === slug) || null
}
