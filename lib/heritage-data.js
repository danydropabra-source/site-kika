// Mock typed-shape data for Histórias que Ficam
// Shape allows new streets/places to be added without rebuilding components.

// Fotografias alojadas no Supabase Storage (bucket público).
// Os espaços do nome do bucket têm de ir codificados como %20.
// Declarado no topo para poder ser usado em qualquer ponto deste ficheiro:
// se ficasse mais abaixo, usá-lo antes desta linha daria erro.
//
// Uso:  image: `${SB}/hero.JPG`
const SB = 'https://hixjkkodzawkrwflnsld.supabase.co/storage/v1/object/public/Historias%20que%20ficam'

// Fundo do topo da página inicial.
// `poster` é a fotografia que aparece de imediato, enquanto o vídeo carrega —
// e é também o que fica para quem tem "reduzir movimento" ou poupança de dados
// activados. O ideal é que seja um fotograma do próprio vídeo, para a passagem
// de um para o outro não se notar.
export const homeHero = {
  video: `${SB}/homepage.mp4`,
  // Sem cartaz por agora: a base é o verde escuro do site até o vídeo entrar.
  // Quando houver um fotograma do vídeo, carrega-o no bucket e põe aqui:
  //   poster: `${SB}/homepage-poster.jpg`,
  poster: null,
  posterFocus: '50% 50%',
}

export const todayInHistory = {
  date: '15 de Junho · 1834',
  title: 'Fim das Ordens Religiosas em Portugal',
  excerpt:
    'Neste dia, o Estado decretou a extinção dos conventos masculinos, transformando profundamente o tecido urbano de muitas vilas portuguesas — incluindo o Fundão.',
}

// Imagens provisórias para os locais que ainda não têm fotografias próprias.
// Quando houver fotografias reais, carrega-as no bucket e substitui no local.
const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  'https://images.unsplash.com/photo-1614807254023-133d1a7a3c41?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  'https://images.unsplash.com/photo-1562195168-c82fea0f0953?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
]

// Grandes locais que agrupam as ruas na secção "Locais" da página inicial
// e no mapa. Cada entrada de `featuredPlaces` indica o seu grupo em `group`.
// Para criar um grupo novo: acrescenta-o aqui e usa o `id` nas ruas.
export const placeGroups = [
  {
    id: 'fundao',
    name: 'Fundão',
    image: `${SB}/hero.JPG`,
    imageFocus: '50% 90%',
  },
  {
    id: 'covilha',
    name: 'Covilhã',
    // TODO imagem: fotografia provisória, substituir por uma da Covilhã.
    image: PLACEHOLDER_IMAGES[1],
  },
]

export const featuredPlaces = [
  {
    id: 'rua-da-cale-fundao',
    group: 'fundao',
    slug: 'rua-da-cale-fundao',
    name: 'Rua da Cale',
    location: 'Fundão',
    // 40°08'12.9"N 7°30'00.0"W — confirmado na Rua da Cale, Fundão
    lat: 40.136917,
    lng: -7.5,
    pilot: true,
    image: `${SB}/hero.JPG`,
    // Enquadramento no cartão: 0% = topo, 50% = meio, 100% = base.
    imageFocus: '50% 90%',
    description: 'Uma das ruas mais antigas e emblemáticas do Fundão',
  },
  {
    id: 'casa-trigueiros-aragao',
    group: 'fundao',
    slug: 'casa-dos-trigueiros-de-aragao',
    name: 'Casa dos Trigueiros de Aragão',
    location: 'Fundão',
    // 40.13455620846359, -7.4963468193750735 — fornecida pela equipa editorial.
    // Não confirmável no OpenStreetMap: o edifício não está lá mapeado.
    lat: 40.134556,
    lng: -7.496347,
    // TODO imagem: a fotografia abaixo é de um castelo (herdada da entrada anterior)
    // e não corresponde ao edifício. Substituir por fotografia real.
    image: 'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'Ficha editorial em preparação.',
  },
  {
    id: 'igreja-matriz',
    group: 'fundao',
    slug: 'igreja-matriz',
    name: 'Igreja Matriz',
    location: 'Fundão',
    // 40°08'13.9"N 7°29'57.6"W — confirmado na Igreja de São Martinho (matriz do Fundão)
    lat: 40.137194,
    lng: -7.499333,
    image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'Centro espiritual e arquitectónico, séculos de fé e arte sacra.',
  },
  {
    id: 'praca-velha',
    group: 'fundao',
    slug: 'praca-velha',
    name: 'Praça Velha',
    location: 'Fundão',
    // 40.13780542931606, -7.499024697756455 — a 6 m da Praça Velha mapeada no OpenStreetMap
    lat: 40.137805,
    lng: -7.499025,
    image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description: 'O coração público da vila, onde se faziam feiras, festas e história.',
  },
  // ---------------- COVILHÃ ----------------
  // Coordenadas do OpenStreetMap. Nas ruas compridas é um ponto ao longo da
  // rua, perto do centro histórico — ajustar se a história for de um troço.
  {
    id: 'rua-marques-davila-e-bolama',
    group: 'covilha',
    slug: 'rua-marques-davila-e-bolama',
    name: "Rua Marquês d'Ávila e Bolama",
    location: 'Covilhã',
    lat: 40.279253,
    lng: -7.502606,
    image: PLACEHOLDER_IMAGES[0],
    description: 'Ficha editorial em preparação.',
  },
  {
    id: 'avenida-frei-heitor-pinto',
    group: 'covilha',
    slug: 'avenida-frei-heitor-pinto',
    name: 'Avenida Frei Heitor Pinto',
    location: 'Covilhã',
    lat: 40.28487,
    lng: -7.506436,
    image: PLACEHOLDER_IMAGES[1],
    description: 'Ficha editorial em preparação.',
  },
  {
    id: 'rua-comendador-campos-melo',
    group: 'covilha',
    slug: 'rua-comendador-campos-melo',
    name: 'Rua Comendador Campos Melo',
    location: 'Covilhã',
    lat: 40.281765,
    lng: -7.503887,
    image: PLACEHOLDER_IMAGES[2],
    description: 'Ficha editorial em preparação.',
  },
  {
    id: 'largo-5-de-outubro',
    group: 'covilha',
    slug: 'largo-5-de-outubro',
    name: 'Largo 5 de Outubro',
    location: 'Covilhã',
    lat: 40.280962,
    lng: -7.50332,
    image: PLACEHOLDER_IMAGES[3],
    description: 'Ficha editorial em preparação.',
  },
  {
    id: 'rua-das-portas-do-sol',
    group: 'covilha',
    slug: 'rua-das-portas-do-sol',
    name: 'Rua das Portas do Sol',
    location: 'Covilhã',
    lat: 40.279435,
    lng: -7.505306,
    image: PLACEHOLDER_IMAGES[0],
    description: 'Ficha editorial em preparação.',
  },
]

export const streets = {
  'rua-da-cale-fundao': {
    slug: 'rua-da-cale-fundao',
    category: 'Fundão',
    title: 'Rua da Cale',
    subtitle: 'O berço de uma figura ilustre do Fundão',
    intro_paragraph:
      'Uma das ruas mais antigas e emblemáticas do Fundão, cheia de história, memórias e tradições que atravessam gerações.',
    heroImage: `${SB}/hero.JPG`,
    // Enquadramento da fotografia do topo: 0% = topo, 50% = meio, 100% = base.
    // 70% mostra mais a metade inferior da fotografia.
    heroFocus: '50% 85%',
    main_history_image: `${SB}/bloco1.JPG`,
    name_origin:
      'O nome “Rua da Cale” tem origem num rego de água que percorria toda a extensão da rua. Aproveitando a inclinação natural do terreno, as águas provenientes da Serra da Gardunha eram conduzidas por uma cale ou canal, utilizada para abastecimento e rega das propriedades nos arredores da vila. Apesar de a rua ter recebido outros nomes ao longo do tempo, a população nunca deixou de a conhecer como Rua da Cale',
    themed_sections: [
      {
        title: 'A Rua dos Artesãos e Comerciantes',
        body:
          'Durante muitos anos, a Rua da Cale foi uma das principais artérias comerciais do Fundão.Aqui encontravam-se oficinas de sapateiros, latoeiros e outros artesãos que contribuíam para a economia local. Pequenos negócios familiares e oficinas tradicionais davam vida à rua, tornando-a um importante ponto de encontro para a comunidade.',
          
        image: `${SB}/bloco3.JPG`,
      },
    ],
    heritage_highlight: {
      name: 'CASA DOS MACEDOS',
      subtitle: 'Nº 14 · Séc. XVIII',
      text:
        'Considerada uma das mais belas casas senhoriais do Fundão, destacou-se pela elegância da sua fachada, pelo pátio de entrada e pela riqueza artística da sua capela. Nos anos 30 acolheu o colégio de Santo António, o primeiro estabelecimento de ensino secundário da vila. Apesar da sua importância histórica e patrimonial, grande parte do edifício original perdeu-se ao longo do século XX.',
      image: `${SB}/bloco2.JPG`,
    },
    before_after_images: [
      {
        before: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
        after: 'https://images.unsplash.com/photo-1614807254023-133d1a7a3c41?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
        caption: 'A rua antes e depois dos restauros de 1953. O calcetamento foi refeito com pedras da antiga muralha medieval.',
        year_before: 'c. 1935',
        year_after: 'Hoje',
      },
      {
        before: 'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
        after: 'https://images.unsplash.com/photo-1562195168-c82fea0f0953?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
        caption: 'A esquina sul, quando ainda funcionava a taberna do Sr. Joaquim, ponto de encontro dos comerciantes.',
        year_before: 'c. 1958',
        year_after: 'Hoje',
      },
    ],
    // Referências mostradas ao lado de "Onde fica?". `icon`: 'landmark' ou 'pin'.
    landmarks: [
      { icon: 'landmark', label: 'Igreja Matriz', dist: 'a sul' },
      { icon: 'pin', label: 'Praça Velha', dist: 'a norte' },
      { icon: 'landmark', label: 'Castelo', dist: 'a poente' },
    ],
    location_description:
      'A Rua da Cale localiza-se no coração do centro histórico do Fundão, entre a Igreja Matriz a sul e a Praça Velha a norte. Uma caminhada curta e serena, ligada às principais ruas antigas da vila.',
    audio: {
      title: 'Ouvir a história',
      src: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_27e35baad3.mp3',
      duration: 184,
    },
    paragraphs: [
      'A Rua da Cale é uma das ruas mais antigas e emblemáticas do Fundão',
      'Ao longo de gerações, foi um importante centro de comércio, trabalho e convivência, onde artesãos, comerciantes e famílias ajudaram a construir a identidade da vila. Ainda hoje conserva parte do seu traçado tradicional, das suas casas características e das histórias que marcam a vida de quem aqui viveu.',
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
    // Números das fotografias que existem no bucket. A 1, a 5 e a 6 foram
    // apagadas do Supabase, por isso saíram desta lista.
    // Para acrescentar ou remover fotografias, edita só os números aqui.
    gallery: [2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      .map((n) => `${SB}/galeria${n}.JPG`),
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
        name: 'Adriano Reis',
        age: 81,
        ligacao: 'Morador da Rua da Cale',
        date: 'Maio 2025',
        text: '“Um dia juntaram-se todos os locais, cada um deu um ingrediente e fizeram uma torta do tamanho da rua. Foi um acontecimento marcante, onde concentrou-se muita população, inclusive pessoas de outras zonas.”',
        photo: `${SB}/Sr.Adriano%20.jpeg`,
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
      name: 'PADRE JOSÉ MARIA ALBERTO SOARES',
      dates: '1890 – ?',
      photo: 'https://images.unsplash.com/photo-1551763127-9fa66ee3e2a3?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
      bio: 'Nascido na Rua da Cale, participou ativamente na vida pública do Fundão e contribuiu para importantes melhorias na vila, como o abastecimento de água e a chegada da eletricidade, que aconteceu em 1907.Foi um orador admirado e uma figura muito estimada pela comunidade.“Pobre e doente, regressou um dia ao seu Fundão, à casa da sua infância, ali na Rua da Cale, onde viria a falecer em agosto de 1930.”',
    },
    related: [
      {
        slug: 'casa-dos-trigueiros-de-aragao',
        name: 'Casa dos Trigueiros de Aragão',
        image: 'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
        description: 'Ficha editorial em preparação.',
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
// PLACEHOLDER STREETS
// Streets that appear on the map / homepage / routes but don't yet
// have real editorial content. They get EVERY block the Rua da Cale has
// (same layout, same order), filled with clearly-marked placeholder copy
// and provisional photographs, so nothing 404s and the page already looks
// like the finished one. Replace field-by-field as real content arrives:
// set the field on the entry below and it overrides the generated one.
// ============================================================

function makePlaceholderStreet({ slug, title, category, heroImage, image, description, ...overrides }) {
  const intro =
    description ||
    `Um local com carácter próprio, ainda por documentar em detalhe. Em breve, mais história aqui.`
  const photo = (i) => PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length]
  return {
    slug,
    title,
    category,
    subtitle: 'Uma página em construção — história em recolha',
    intro_paragraph: intro,
    heroImage: heroImage || image || photo(0),
    main_history_image: image || heroImage || photo(1),
    is_placeholder: true, // internal flag for future filtering / labels
    paragraphs: [
      `A investigação sobre ${title} está em curso. Este local faz parte do arquivo de ${category} e será documentado com o mesmo cuidado editorial dado às restantes ruas do projecto.`,
      `Se guarda memórias, fotografias ou histórias sobre este lugar, partilhe-as connosco através da secção "Memórias da Comunidade" — cada testemunho ajuda a construir o arquivo.`,
    ],
    name_origin: `A origem do nome ${title} está a ser investigada nos arquivos de ${category}. Em breve contaremos aqui porque é que este lugar se chama assim.`,
    themed_sections: [
      {
        title: 'A vida na rua',
        body: `Os ofícios, o comércio e o quotidiano de quem viveu em ${title} estão a ser recolhidos junto da comunidade. Este espaço contará como era a vida aqui.`,
        image: photo(2),
      },
    ],
    heritage_highlight: {
      name: 'Património em estudo',
      subtitle: 'Em preparação',
      text: `Estamos a identificar o edifício ou elemento patrimonial mais marcante de ${title}. A ficha será publicada assim que a investigação estiver concluída.`,
      image: photo(3),
    },
    personality: {
      slug: null, // sem página de biografia até haver uma figura identificada
      name: 'Figura em investigação',
      dates: 'Em breve',
      photo: photo(0),
      bio: `Procuramos a figura ilustre ligada a ${title}. Se conhece alguém que aqui nasceu ou viveu, partilhe connosco.`,
    },
    before_after_images: [
      {
        before: photo(0),
        after: photo(2),
        caption: 'Fotografias de comparação em recolha.',
        year_before: '',
        year_after: 'Hoje',
      },
    ],
    gallery: [heroImage || image || photo(0), photo(1), photo(2), photo(3)],
    curiosities: [
      `Este ponto está entre os locais seleccionados para a próxima fase de investigação editorial do projecto no ${category}.`,
    ],
    communityMemories: [],
    landmarks: [],
    audio: null, // no audio card when there's no audio
    location_description: `${title} localiza-se no centro histórico de ${category}, integrado no percurso patrimonial do projecto "Histórias que Ficam".`,
    ...overrides,
  }
}

// Register placeholders for every place referenced by featuredPlaces / map / routes.
;[
  {
    slug: 'casa-dos-trigueiros-de-aragao',
    title: 'Casa dos Trigueiros de Aragão',
    category: 'Fundão',
    heroImage: 'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    image: 'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    // Sem `description`: usa o texto neutro do gerador, já traduzido nos 4 idiomas.
  },
  {
    slug: 'igreja-matriz',
    title: 'Igreja Matriz',
    category: 'Fundão',
    heroImage: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description:
      'Centro espiritual e arquitectónico da vila, séculos de fé e arte sacra. A investigação editorial está em curso.',
  },
  {
    slug: 'praca-velha',
    title: 'Praça Velha',
    category: 'Fundão',
    heroImage: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description:
      'O coração público da vila, onde se faziam feiras, festas e história. Conteúdo em recolha junto da comunidade.',
  },
  {
    slug: 'praca-do-municipio',
    title: 'Praça do Município',
    category: 'Fundão',
    heroImage: 'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    image: 'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    description:
      'Centro administrativo da vila, palco de discursos, feiras e celebrações. Ficha editorial em preparação.',
  },
  // ---------------- COVILHÃ ----------------
  { slug: 'rua-marques-davila-e-bolama', title: "Rua Marquês d'Ávila e Bolama", category: 'Covilhã' },
  { slug: 'avenida-frei-heitor-pinto', title: 'Avenida Frei Heitor Pinto', category: 'Covilhã' },
  { slug: 'rua-comendador-campos-melo', title: 'Rua Comendador Campos Melo', category: 'Covilhã' },
  { slug: 'largo-5-de-outubro', title: 'Largo 5 de Outubro', category: 'Covilhã' },
  { slug: 'rua-das-portas-do-sol', title: 'Rua das Portas do Sol', category: 'Covilhã' },
].forEach((meta) => {
  if (!streets[meta.slug]) {
    streets[meta.slug] = makePlaceholderStreet(meta)
  }
})

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
    relatedStreet: { name: 'Rua da Cale', slug: 'rua-da-cale-fundao' },
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
    relatedPlaces: ['rua-da-cale-fundao', 'igreja-matriz', 'praca-velha'],
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
