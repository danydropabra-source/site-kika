// ============================================================
// ENGLISH CONTENT OVERRIDES
//
// Only translated text lives here. Images, coordinates, slugs and ids stay
// in heritage-data.js. Anything omitted falls back to Portuguese.
//
// Proper nouns are deliberately NOT translated: street names, place names
// and people's names stay Portuguese so a visitor can match what they read
// here with what is written on the actual street sign.
// ============================================================

const en = {
  todayInHistory: {
    date: '15 June · 1834',
    title: 'The End of the Religious Orders in Portugal',
    excerpt:
      'On this day the State decreed the dissolution of the male convents, profoundly reshaping the urban fabric of many Portuguese towns — the Fundão among them.',
  },

  featuredPlaces: {
    'rua-da-cale-fundao': {
      description: 'The birthplace of an illustrious figure, where every stone holds a memory.',
    },
    'casa-dos-trigueiros-de-aragao': {
      description: 'Editorial record in preparation.',
    },
    'igreja-matriz': {
      description: 'Spiritual and architectural heart, centuries of faith and sacred art.',
    },
    'praca-velha': {
      description: 'The public heart of the town, where fairs, festivals and history were made.',
    },
    'rua-marques-davila-e-bolama': {
      description: 'Editorial record in preparation.',
    },
    'avenida-frei-heitor-pinto': {
      description: 'Editorial record in preparation.',
    },
    'rua-comendador-campos-melo': {
      description: 'Editorial record in preparation.',
    },
    'largo-5-de-outubro': {
      description: 'Editorial record in preparation.',
    },
    'rua-das-portas-do-sol': {
      description: 'Editorial record in preparation.',
    },
  },

  // Copy shared by every street that has no editorial content yet.
  // {title} and {category} are filled in automatically.
  placeholder: {
    introFallback:
      'A place with a character of its own, not yet documented in detail. More history here soon.',
    subtitle: 'A page in progress — history being gathered',
    paragraphs: [
      'Research on {title} is under way. This place belongs to the {category} archive and will be documented with the same editorial care given to every other street in the project.',
      'If you hold memories, photographs or stories about this place, share them with us through the "Community Memories" section — every testimony helps build the archive.',
    ],
    curiosities: [
      'This point is among the places selected for the next phase of the project’s editorial research in {category}.',
    ],
    locationDescription:
      '{title} sits in the historic centre of {category}, part of the "Histórias que Ficam" heritage trail.',
    nameOrigin:
      'The origin of the name {title} is being researched in the {category} archives. Soon we will tell here why this place is called what it is.',
    themed: {
      title: 'Life on the street',
      body: 'The trades, the commerce and the daily life of those who lived on {title} are being gathered from the community. This space will tell what life was like here.',
    },
    heritage: {
      name: 'Heritage under study',
      subtitle: 'In preparation',
      text: 'We are identifying the most striking building or heritage feature of {title}. Its record will be published as soon as the research is complete.',
    },
    personality: {
      name: 'Figure under research',
      dates: 'Coming soon',
      bio: 'We are looking for the illustrious figure linked to {title}. If you know someone who was born or lived here, share it with us.',
    },
    beforeAfter: {
      caption: 'Comparison photographs being gathered.',
      yearAfter: 'Today',
    },
  },

  streets: {
    'rua-da-cale-fundao': {
      landmarks: [
        { dist: "to the south" },
        { dist: "to the north" },
        { dist: "to the west" },
      ],
      subtitle: 'The birthplace of an illustrious figure of the Fundão',
      intro_paragraph:
        'One of the oldest and most emblematic streets in the Fundão, full of history, memories and traditions that span generations.',
      name_origin:
        'The name "Rua da Cale" comes from a water channel that ran the full length of the street. Taking advantage of the natural slope of the land, water flowing down from the Serra da Gardunha was carried along a cale, or channel, used to supply and irrigate the properties on the outskirts of the town. Although the street was given other names over time, local people never stopped calling it Rua da Cale.',
      themed_sections: [
        {
          title: 'The Street of Artisans and Merchants',
          body:
            "For many years, Rua da Cale was one of the Fundão's main commercial arteries. Here stood the workshops of cobblers, tinsmiths and other artisans who contributed to the local economy. Small family businesses and traditional workshops gave the street its life, making it an important meeting point for the community.",
        },
      ],
      heritage_highlight: {
        subtitle: 'No. 14 · 18th century',
        text:
          "Considered one of the finest manor houses in the Fundão, it stood out for the elegance of its façade, its entrance courtyard and the artistic richness of its chapel. In the 1930s it housed the Colégio de Santo António, the town's first secondary school. Despite its historical and heritage importance, much of the original building was lost over the course of the 20th century.",
      },
      before_after_images: [
        {
          caption:
            'The street before and after the 1953 restoration works. The cobbling was relaid with stones from the old medieval wall.',
          year_after: 'Today',
        },
        {
          caption:
            'The southern corner, back when Mr. Joaquim’s tavern was still open — the meeting point of the merchants.',
          year_after: 'Today',
        },
      ],
      location_description:
        'Rua da Cale lies in the heart of the Fundão’s historic centre, between the Igreja Matriz to the south and the Praça Velha to the north. A short, serene walk, connected to the town’s main old streets.',
      audio: { title: 'Listen to the story' },
      paragraphs: [
        'Rua da Cale is one of the oldest and most emblematic streets in the Fundão.',
        'Over generations it was an important centre of trade, work and community life, where artisans, merchants and families helped to build the identity of the town. To this day it keeps part of its traditional layout, its characteristic houses and the stories that mark the lives of those who lived here.',
      ],
      expandable: {
        title: 'Read More',
        body: [
          'In the 19th century, Rua da Cale was one of the Fundão’s main commercial arteries. Goldsmiths, cobblers and weavers set up here, in a constant bustle that turned the street into a small open-air market.',
          'Parish records confirm that between 1875 and 1910 more than forty different families lived on this street, many of them tied to the textile arts and to wax production. The bronze bell we see today at number 12 is one of the few original examples to survive the 20th-century restorations.',
          'In 1953 part of the cobbling was relaid with stones taken from the old medieval wall — a little-known detail that literally links this street to the town’s defensive origins.',
        ],
      },
      tabs: [
        { label: 'History' },
        { label: 'Gallery' },
        { label: 'Curiosities' },
        { label: 'Memories' },
      ],
      curiosities: [
        'The number "7" carved into one of the doorframes is not a house number — it is a stonemason’s mark left by master Tomé Lourenço, active in the Fundão between 1860 and 1890.',
        'For a long time carts were forbidden to pass after sunset, by order of the Town Council, to preserve the residents’ peace and quiet.',
        'The tree growing at the end of the street is a century-old mulberry, planted to supply the old silk industry.',
      ],
      memories: [
        {
          author: 'Maria, 78 years old',
          text:
            '"I remember the Santo António festivals, when the whole street filled with basil and light. That was how we knew summer had arrived."',
        },
        {
          author: 'António, 65 years old',
          text:
            '"My father used to tell me this was where the best deals were made — everything was settled with a handshake, at the door of Mr. Joaquim’s tavern."',
        },
      ],
      communityMemories: [
        {
          ligacao: 'Resident of Rua da Cale',
          date: 'May 2025',
          text:
            '“One day everyone from the neighbourhood got together, each brought an ingredient, and they made a tart as long as the street. It was a memorable event that drew a big crowd, including people from other areas.”',
        },
        {
          ligacao: 'Son of the street',
          date: 'April 2025',
          text:
            'My grandfather had his cobbler’s workshop here. As a child I would sit on the doorstep watching the women go by with their baskets from the market, always with a word for us.',
        },
        {
          ligacao: 'Family with roots on the street',
          date: 'March 2025',
          text:
            'When my mother married in 1972, the whole street came to the windows. They threw petals from the balconies. Even today, when I walk past, I hear that celebrating silence.',
        },
        {
          ligacao: 'Former residence',
          date: 'February 2025',
          text:
            'Christmas here was different. Every door was a nativity scene. We went from house to house singing the Janeiras — we were given figs, walnuts, and sometimes a little glass of liqueur.',
        },
        {
          ligacao: 'Visitor',
          date: 'January 2025',
          text:
            'I came for the first time looking for my great-grandmother’s roots. I found a lady who still remembered her name. I left with more family than I arrived with.',
        },
      ],
      personality: {
        name: 'FATHER JOSÉ MARIA ALBERTO SOARES',
        bio:
          'Born on Rua da Cale, he took an active part in the public life of the Fundão and contributed to important improvements in the town, such as the water supply and the arrival of electricity in 1907. He was an admired speaker and a figure held in great affection by the community. “Poor and ailing, he returned one day to his Fundão, to the house of his childhood, there on Rua da Cale, where he would die in August 1930.”',
      },
      related: [
        { description: 'The fortress that watched over the town for centuries.' },
        { description: 'Sacred art and collective memory in the heart of the Fundão.' },
        { description: 'The meeting point of entire generations.' },
      ],
    },

    // 'casa-dos-trigueiros-de-aragao' has no override: it falls back to the
    // neutral placeholder copy, which is already translated above.
    'igreja-matriz': {
      intro_paragraph:
        'The spiritual and architectural heart of the town, centuries of faith and sacred art. Editorial research is under way.',
    },
    'praca-velha': {
      intro_paragraph:
        'The public heart of the town, where fairs, festivals and history were made. Content is being gathered from the community.',
    },
    'praca-do-municipio': {
      intro_paragraph:
        'The administrative centre of the town, a stage for speeches, fairs and celebrations. Editorial record in preparation.',
    },
  },

  personalities: {
    'jose-alves-monteiro': {
      eyebrow: 'Illustrious Figure · Fundão',
      role: 'Teacher, essayist and cultural driving force',
      shortBio:
        'Born on Rua da Cale in 1890, José Alves Monteiro was one of the most respected names in the culture of the Fundão. A teacher, essayist and driving force behind community initiatives, his work shaped generations.',
      fullBio: [
        'José Alves Monteiro was born in the house at number 14 on Rua da Cale, into a modest family tied to the small silk industry. He attended the local primary school and later the secondary school in Guarda, where he stood out for his calling to letters and to teaching.',
        'He returned to the Fundão in 1912, by then a qualified teacher. For almost four decades he taught in schools across the region and founded reading circles that brought national authors closer to rural populations. To many he was simply "the schoolmaster" — a guiding figure for several generations.',
        'Beyond teaching, he devoted himself to the study of local history. He published essays in regional newspapers on the place names of the Fundão, the silk industry, religious traditions and the role of working women in the town in the early 20th century. His writing remains a primary source for researchers.',
        'He took an active part in community initiatives: he founded the Sociedade Filarmónica do Fundão (1925), collaborated with the Casa do Povo and drove the creation of a small public library — the forerunner of today’s municipal library.',
        'The exact date of his death remains uncertain, lost in the disarray of the post-war archives. Oral testimony tells us he lived at least into the 1960s.',
      ],
      gallery: [
        { caption: 'His birthplace on Rua da Cale, photographed before the 1953 restoration works.' },
        { caption: 'A lesson manuscript on the place names of the Fundão, c. 1928.' },
        { caption: 'Rua da Cale, c. 1935. Fundão Municipal Archive.' },
        { caption: 'A clipping from the "Jornal do Fundão" (1932) with an essay on the silk industry.' },
      ],
      sources: [
        { title: 'Fundão Municipal Archive — parish records', type: 'Archive' },
        { title: '"Jornal do Fundão" — complete collection', type: 'Periodical press' },
        { title: 'Monteiro, J. A. — Collected essays', type: 'Book' },
        { title: 'Sociedade Filarmónica do Fundão — founding minutes', type: 'Association archive' },
        { title: 'Oral interviews with former pupils (collected 2018)', type: 'Oral history' },
      ],
    },
  },
}

export default en
