// ============================================================
// CONTENU EN FRANÇAIS
//
// Seul le texte traduit vit ici. Les images, coordonnées, slugs et ids
// restent dans heritage-data.js. Ce qui est omis retombe sur le portugais.
//
// Les noms propres ne sont volontairement PAS traduits : noms de rues, de
// lieux et de personnes restent en portugais pour que le visiteur puisse
// reconnaître ici ce qui est écrit sur la plaque de la rue.
// ============================================================

const fr = {
  todayInHistory: {
    date: '15 juin · 1834',
    title: 'La fin des ordres religieux au Portugal',
    excerpt:
      "Ce jour-là, l'État décréta l'extinction des couvents masculins, transformant profondément le tissu urbain de nombreuses villes portugaises — dont Fundão.",
  },

  featuredPlaces: {
    'rua-da-cale-fundao': {
      description: "Le berceau d'une figure illustre, où chaque pierre garde une mémoire.",
    },
    'casa-dos-trigueiros-de-aragao': {
      description: 'Fiche éditoriale en préparation.',
    },
    'igreja-matriz': {
      description: 'Centre spirituel et architectural, des siècles de foi et d’art sacré.',
    },
    'praca-velha': {
      description: 'Le cœur public de la ville, où se faisaient les foires, les fêtes et l’histoire.',
    },
    'rua-marques-davila-e-bolama': {
      description: 'Fiche éditoriale en préparation.',
    },
    'avenida-frei-heitor-pinto': {
      description: 'Fiche éditoriale en préparation.',
    },
    'rua-comendador-campos-melo': {
      description: 'Fiche éditoriale en préparation.',
    },
    'largo-5-de-outubro': {
      description: 'Fiche éditoriale en préparation.',
    },
    'rua-das-portas-do-sol': {
      description: 'Fiche éditoriale en préparation.',
    },
  },

  // Texte commun à toutes les rues qui n'ont pas encore de contenu éditorial.
  // {title} et {category} sont remplis automatiquement.
  placeholder: {
    introFallback:
      "Un lieu au caractère bien à lui, pas encore documenté en détail. Bientôt, plus d'histoire ici.",
    subtitle: 'Une page en construction — histoire en cours de collecte',
    paragraphs: [
      "La recherche sur {title} est en cours. Ce lieu fait partie des archives de {category} et sera documenté avec le même soin éditorial que les autres rues du projet.",
      "Si vous conservez des souvenirs, des photographies ou des histoires sur ce lieu, partagez-les avec nous via la section « Mémoires de la communauté » — chaque témoignage aide à construire les archives.",
    ],
    curiosities: [
      "Ce point figure parmi les lieux retenus pour la prochaine phase de recherche éditoriale du projet à {category}.",
    ],
    locationDescription:
      "{title} se situe dans le centre historique de {category}, intégré au parcours patrimonial du projet « Histórias que Ficam ».",
    nameOrigin:
      "L'origine du nom {title} fait l'objet de recherches dans les archives de {category}. Nous raconterons bientôt ici pourquoi ce lieu porte ce nom.",
    themed: {
      title: 'La vie dans la rue',
      body: "Les métiers, le commerce et le quotidien de ceux qui ont vécu à {title} sont en cours de collecte auprès de la communauté. Cet espace racontera comment on vivait ici.",
    },
    heritage: {
      name: "Patrimoine à l'étude",
      subtitle: 'En préparation',
      text: "Nous identifions le bâtiment ou l'élément patrimonial le plus marquant de {title}. Sa fiche sera publiée dès la fin des recherches.",
    },
    personality: {
      name: 'Figure en cours de recherche',
      dates: 'Bientôt',
      bio: "Nous recherchons la figure illustre liée à {title}. Si vous connaissez quelqu'un qui est né ou a vécu ici, partagez-le avec nous.",
    },
    beforeAfter: {
      caption: 'Photographies de comparaison en cours de collecte.',
      yearAfter: "Aujourd'hui",
    },
  },

  streets: {
    'rua-da-cale-fundao': {
      landmarks: [
        { dist: "au sud" },
        { dist: "au nord" },
        { dist: "à l'ouest" },
      ],
      subtitle: "Le berceau d'une figure illustre de Fundão",
      intro_paragraph:
        "L'une des rues les plus anciennes et les plus emblématiques de Fundão, pleine d'histoire, de mémoires et de traditions qui traversent les générations.",
      name_origin:
        "Le nom « Rua da Cale » vient d'un canal d'eau qui parcourait toute la longueur de la rue. Profitant de la pente naturelle du terrain, les eaux venues de la Serra da Gardunha étaient conduites par une cale, ou canal, utilisée pour l'approvisionnement et l'irrigation des propriétés aux abords de la ville. Bien que la rue ait reçu d'autres noms au fil du temps, la population n'a jamais cessé de l'appeler Rua da Cale.",
      themed_sections: [
        {
          title: 'La rue des artisans et des commerçants',
          body:
            "Pendant de nombreuses années, la Rua da Cale fut l'une des principales artères commerçantes de Fundão. On y trouvait des ateliers de cordonniers, de ferblantiers et d'autres artisans qui contribuaient à l'économie locale. De petits commerces familiaux et des ateliers traditionnels donnaient vie à la rue, en faisant un important point de rencontre pour la communauté.",
        },
      ],
      heritage_highlight: {
        subtitle: 'Nº 14 · XVIIIe siècle',
        text:
          "Considérée comme l'une des plus belles maisons seigneuriales de Fundão, elle se distinguait par l'élégance de sa façade, par sa cour d'entrée et par la richesse artistique de sa chapelle. Dans les années 30, elle accueillit le Colégio de Santo António, le premier établissement d'enseignement secondaire de la ville. Malgré son importance historique et patrimoniale, une grande partie du bâtiment d'origine a disparu au cours du XXe siècle.",
      },
      before_after_images: [
        {
          caption:
            "La rue avant et après les restaurations de 1953. Le pavage a été refait avec des pierres de l'ancienne muraille médiévale.",
          year_after: "Aujourd'hui",
        },
        {
          caption:
            "L'angle sud, quand fonctionnait encore la taverne de M. Joaquim, point de rencontre des commerçants.",
          year_after: "Aujourd'hui",
        },
      ],
      location_description:
        "La Rua da Cale se situe au cœur du centre historique de Fundão, entre l'Igreja Matriz au sud et la Praça Velha au nord. Une promenade courte et sereine, reliée aux principales rues anciennes de la ville.",
      audio: { title: "Écouter l'histoire" },
      paragraphs: [
        "La Rua da Cale est l'une des rues les plus anciennes et les plus emblématiques de Fundão.",
        "Au fil des générations, elle fut un important centre de commerce, de travail et de vie collective, où artisans, commerçants et familles ont contribué à bâtir l'identité de la ville. Elle conserve encore aujourd'hui une partie de son tracé traditionnel, de ses maisons caractéristiques et des histoires qui marquent la vie de ceux qui y ont vécu.",
      ],
      expandable: {
        title: 'En savoir plus',
        body: [
          "Au XIXe siècle, la Rua da Cale était l'une des principales artères commerciales de Fundão. S'y installaient orfèvres, cordonniers et tisserandes, dans un mouvement continu qui faisait de la rue un petit marché à ciel ouvert.",
          "Les registres paroissiaux confirment qu'entre 1875 et 1910 plus de quarante familles différentes ont vécu dans cette rue, beaucoup liées aux arts textiles et à la production de cire. La sonnette en bronze que l'on voit aujourd'hui au numéro 12 est l'un des rares exemplaires d'origine à avoir survécu aux restaurations du XXe siècle.",
          "En 1953, une partie du pavage a été refaite avec des pierres provenant de l'ancienne muraille médiévale — un détail peu connu, mais qui relie littéralement cette rue aux origines défensives de la ville.",
        ],
      },
      tabs: [
        { label: 'Histoire' },
        { label: 'Galerie' },
        { label: 'Curiosités' },
        { label: 'Mémoires' },
      ],
      curiosities: [
        "Le chiffre « 7 » gravé sur l'un des encadrements ne correspond pas à une porte — c'est une marque de tailleur de pierre du maître Tomé Lourenço, actif à Fundão entre 1860 et 1890.",
        "Pendant longtemps, il fut interdit de passer avec des charrettes après le coucher du soleil, par ordre de la mairie, pour préserver la tranquillité des habitants.",
        "L'arbre qui pousse au bout de la rue est un mûrier centenaire, planté pour approvisionner l'ancienne industrie de la soie.",
      ],
      memories: [
        {
          author: 'Maria, 78 ans',
          text:
            "« Je me souviens des fêtes de Santo António, quand toute la rue se remplissait de basilic et de lumière. C'est ainsi que nous savions que l'été était arrivé. »",
        },
        {
          author: 'António, 65 ans',
          text:
            "« Mon père me racontait que c'était ici que se faisaient les meilleures affaires — tout se réglait par une poignée de main, à la porte de la taverne de M. Joaquim. »",
        },
      ],
      communityMemories: [
        {
          ligacao: 'Habitant de la Rua da Cale',
          date: 'Mai 2025',
          text:
            "« Un jour, tous les gens du quartier se sont réunis, chacun a apporté un ingrédient et ils ont fait une tarte de la longueur de la rue. Ce fut un événement marquant, qui a rassemblé beaucoup de monde, y compris des personnes venues d'autres quartiers. »",
        },
        {
          ligacao: 'Fils de la rue',
          date: 'Avril 2025',
          text:
            "Mon grand-père avait ici son atelier de cordonnier. Enfant, je m'asseyais sur la marche de la porte à regarder passer les dames, avec leurs paniers du marché, toujours un mot pour nous.",
        },
        {
          ligacao: 'Famille avec des racines dans la rue',
          date: 'Mars 2025',
          text:
            "Quand ma mère s'est mariée en 1972, la rue entière est venue aux fenêtres. On jetait des pétales depuis les balcons. Aujourd'hui encore, quand je passe ici, j'entends ce silence en fête.",
        },
        {
          ligacao: 'Ancienne résidence',
          date: 'Février 2025',
          text:
            "Noël ici était différent. Chaque porte était une crèche. Nous allions de maison en maison chanter les Janeiras — on nous donnait des figues, des noix, et parfois un petit verre de liqueur.",
        },
        {
          ligacao: 'Visiteuse',
          date: 'Janvier 2025',
          text:
            "Je suis venue pour la première fois à la recherche des racines de mon arrière-grand-mère. J'ai trouvé une dame qui se souvenait encore de son nom. Je suis repartie avec plus de famille que je n'en avais en arrivant.",
        },
      ],
      personality: {
        name: 'PÈRE JOSÉ MARIA ALBERTO SOARES',
        bio:
          "Né dans la Rua da Cale, il participa activement à la vie publique de Fundão et contribua à d'importantes améliorations dans la ville, comme l'adduction d'eau et l'arrivée de l'électricité, en 1907. Ce fut un orateur admiré et une figure très estimée de la communauté. « Pauvre et malade, il revint un jour dans son Fundão, à la maison de son enfance, là, dans la Rua da Cale, où il devait mourir en août 1930. »",
      },
      related: [
        { description: 'La forteresse qui veilla sur la ville pendant des siècles.' },
        { description: 'Art sacré et mémoire collective au cœur de Fundão.' },
        { description: 'Le point de rencontre de générations entières.' },
      ],
    },

    // 'casa-dos-trigueiros-de-aragao' n'a pas de surcharge : il retombe sur le
    // texte neutre du générateur, déjà traduit ci-dessus.
    'igreja-matriz': {
      intro_paragraph:
        "Centre spirituel et architectural de la ville, des siècles de foi et d'art sacré. La recherche éditoriale est en cours.",
    },
    'praca-velha': {
      intro_paragraph:
        "Le cœur public de la ville, où se faisaient les foires, les fêtes et l'histoire. Contenu en cours de collecte auprès de la communauté.",
    },
    'praca-do-municipio': {
      intro_paragraph:
        'Centre administratif de la ville, scène de discours, de foires et de célébrations. Fiche éditoriale en préparation.',
    },
  },

  personalities: {
    'jose-alves-monteiro': {
      eyebrow: 'Personnalité illustre · Fundão',
      role: 'Enseignant, essayiste et moteur culturel',
      shortBio:
        "Né dans la Rua da Cale en 1890, José Alves Monteiro fut l'un des noms les plus respectés de la culture de Fundão. Enseignant, essayiste et moteur d'initiatives associatives, son travail a façonné des générations.",
      fullBio: [
        "José Alves Monteiro est né dans la maison au numéro 14 de la Rua da Cale, dans une famille modeste liée à la petite industrie de la soie. Il fréquenta l'école primaire locale puis le lycée de Guarda, où il se distingua par sa vocation pour les lettres et pour l'enseignement.",
        "Il revint à Fundão en 1912, déjà diplômé enseignant. Pendant près de quatre décennies, il enseigna dans les écoles de la région et fonda des cercles de lecture qui rapprochaient les auteurs nationaux des populations rurales. Il fut, pour beaucoup, « monsieur le professeur » — figure tutélaire de plusieurs générations.",
        "Au-delà de l'enseignement, il se consacra à l'étude de l'histoire locale. Il publia dans les journaux régionaux des essais sur la toponymie de Fundão, l'industrie de la soie, les traditions religieuses et le rôle des femmes travailleuses dans la ville au début du XXe siècle. Ses textes demeurent une source primaire pour les chercheurs.",
        "Il participa activement à des initiatives associatives : il fonda la Sociedade Filarmónica do Fundão (1925), collabora avec la Casa do Povo et impulsa la création d'une petite bibliothèque publique — devancière de l'actuelle bibliothèque municipale.",
        "La date exacte de sa mort reste incertaine, perdue dans le désordre des archives d'après-guerre. On sait, par des témoignages oraux, qu'il vécut au moins jusqu'aux années 60.",
      ],
      gallery: [
        { caption: 'Maison natale dans la Rua da Cale, photographie antérieure aux restaurations de 1953.' },
        { caption: 'Manuscrit de cours sur la toponymie de Fundão, v. 1928.' },
        { caption: 'Rua da Cale, v. 1935. Archives municipales de Fundão.' },
        { caption: "Coupure du « Jornal do Fundão » (1932) avec un essai sur l'industrie de la soie." },
      ],
      sources: [
        { title: 'Archives municipales de Fundão — registres paroissiaux', type: 'Archives' },
        { title: '« Jornal do Fundão » — collection intégrale', type: 'Presse périodique' },
        { title: 'Monteiro, J. A. — Essais réunis', type: 'Livre' },
        { title: 'Sociedade Filarmónica do Fundão — actes de fondation', type: 'Archives associatives' },
        { title: 'Entretiens oraux avec d’anciens élèves (collecte 2018)', type: 'Histoire orale' },
      ],
    },
  },
}

export default fr
