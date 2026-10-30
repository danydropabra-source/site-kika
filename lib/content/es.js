// ============================================================
// CONTENIDO EN ESPAÑOL
//
// Aquí solo vive el texto traducido. Las imágenes, coordenadas, slugs e ids
// se quedan en heritage-data.js. Lo que se omita cae de vuelta al portugués.
//
// Los nombres propios NO se traducen a propósito: nombres de calles, de
// lugares y de personas se quedan en portugués para que el visitante pueda
// reconocer aquí lo que está escrito en la placa de la calle.
// ============================================================

const es = {
  todayInHistory: {
    date: '15 de junio · 1834',
    title: 'El fin de las órdenes religiosas en Portugal',
    excerpt:
      'Este día el Estado decretó la extinción de los conventos masculinos, transformando profundamente el tejido urbano de muchas villas portuguesas — incluido el Fundão.',
  },

  featuredPlaces: {
    'rua-da-cale-fundao': {
      description: 'La cuna de una figura ilustre, donde cada piedra guarda memoria.',
    },
    'casa-dos-trigueiros-de-aragao': {
      description: 'Ficha editorial en preparación.',
    },
    'igreja-matriz': {
      description: 'Centro espiritual y arquitectónico, siglos de fe y arte sacro.',
    },
    'praca-velha': {
      description: 'El corazón público de la villa, donde se hacían ferias, fiestas e historia.',
    },
    'rua-marques-davila-e-bolama': {
      description: 'Ficha editorial en preparación.',
    },
    'avenida-frei-heitor-pinto': {
      description: 'Ficha editorial en preparación.',
    },
    'rua-comendador-campos-melo': {
      description: 'Ficha editorial en preparación.',
    },
    'largo-5-de-outubro': {
      description: 'Ficha editorial en preparación.',
    },
    'rua-das-portas-do-sol': {
      description: 'Ficha editorial en preparación.',
    },
  },

  // Texto común a todas las calles que aún no tienen contenido editorial.
  // {title} y {category} se rellenan automáticamente.
  placeholder: {
    introFallback:
      'Un lugar con carácter propio, aún por documentar en detalle. En breve, más historia aquí.',
    subtitle: 'Una página en construcción — historia en recogida',
    paragraphs: [
      'La investigación sobre {title} está en curso. Este lugar forma parte del archivo de {category} y será documentado con el mismo cuidado editorial dado a las demás calles del proyecto.',
      'Si guarda recuerdos, fotografías o historias sobre este lugar, compártalos con nosotros a través de la sección "Memorias de la Comunidad" — cada testimonio ayuda a construir el archivo.',
    ],
    curiosities: [
      'Este punto está entre los lugares seleccionados para la próxima fase de investigación editorial del proyecto en {category}.',
    ],
    locationDescription:
      '{title} se ubica en el centro histórico de {category}, integrado en el recorrido patrimonial del proyecto "Histórias que Ficam".',
    nameOrigin:
      'El origen del nombre {title} se está investigando en los archivos de {category}. Pronto contaremos aquí por qué este lugar se llama así.',
    themed: {
      title: 'La vida en la calle',
      body: 'Los oficios, el comercio y la vida cotidiana de quienes vivieron en {title} se están recogiendo junto a la comunidad. Este espacio contará cómo era la vida aquí.',
    },
    heritage: {
      name: 'Patrimonio en estudio',
      subtitle: 'En preparación',
      text: 'Estamos identificando el edificio o elemento patrimonial más destacado de {title}. La ficha se publicará en cuanto concluya la investigación.',
    },
    personality: {
      name: 'Figura en investigación',
      dates: 'Próximamente',
      bio: 'Buscamos la figura ilustre ligada a {title}. Si conoce a alguien que nació o vivió aquí, compártalo con nosotros.',
    },
    beforeAfter: {
      caption: 'Fotografías de comparación en recogida.',
      yearAfter: 'Hoy',
    },
  },

  streets: {
    'rua-da-cale-fundao': {
      landmarks: [
        { dist: "al sur" },
        { dist: "al norte" },
        { dist: "al oeste" },
      ],
      subtitle: 'La cuna de una figura ilustre del Fundão',
      intro_paragraph:
        'Una de las calles más antiguas y emblemáticas del Fundão, llena de historia, memorias y tradiciones que atraviesan generaciones.',
      name_origin:
        'El nombre "Rua da Cale" tiene su origen en una acequia que recorría toda la extensión de la calle. Aprovechando la inclinación natural del terreno, las aguas procedentes de la Serra da Gardunha se conducían por una cale o canal, utilizada para el abastecimiento y el riego de las propiedades en las afueras de la villa. A pesar de que la calle recibió otros nombres a lo largo del tiempo, la población nunca dejó de conocerla como Rua da Cale.',
      themed_sections: [
        {
          title: 'La calle de los artesanos y comerciantes',
          body:
            'Durante muchos años, la Rua da Cale fue una de las principales arterias comerciales del Fundão. Aquí se encontraban talleres de zapateros, hojalateros y otros artesanos que contribuían a la economía local. Pequeños negocios familiares y talleres tradicionales daban vida a la calle, convirtiéndola en un importante punto de encuentro para la comunidad.',
        },
      ],
      heritage_highlight: {
        subtitle: 'Nº 14 · Siglo XVIII',
        text:
          'Considerada una de las más bellas casas señoriales del Fundão, destacó por la elegancia de su fachada, por el patio de entrada y por la riqueza artística de su capilla. En los años 30 acogió el Colégio de Santo António, el primer establecimiento de enseñanza secundaria de la villa. A pesar de su importancia histórica y patrimonial, gran parte del edificio original se perdió a lo largo del siglo XX.',
      },
      before_after_images: [
        {
          caption:
            'La calle antes y después de las restauraciones de 1953. El empedrado se rehízo con piedras de la antigua muralla medieval.',
          year_after: 'Hoy',
        },
        {
          caption:
            'La esquina sur, cuando todavía funcionaba la taberna del Sr. Joaquim, punto de encuentro de los comerciantes.',
          year_after: 'Hoy',
        },
      ],
      location_description:
        'La Rua da Cale se ubica en el corazón del centro histórico del Fundão, entre la Igreja Matriz al sur y la Praça Velha al norte. Un paseo corto y sereno, unido a las principales calles antiguas de la villa.',
      audio: { title: 'Escuchar la historia' },
      paragraphs: [
        'La Rua da Cale es una de las calles más antiguas y emblemáticas del Fundão.',
        'A lo largo de generaciones fue un importante centro de comercio, trabajo y convivencia, donde artesanos, comerciantes y familias ayudaron a construir la identidad de la villa. Todavía hoy conserva parte de su trazado tradicional, de sus casas características y de las historias que marcan la vida de quienes aquí vivieron.',
      ],
      expandable: {
        title: 'Saber más',
        body: [
          'En el siglo XIX, la Rua da Cale era una de las principales arterias comerciales del Fundão. Aquí se instalaban orfebres, zapateros y tejedoras, en un movimiento continuo que hacía de la calle un pequeño mercado al aire libre.',
          'Los registros parroquiales confirman que entre 1875 y 1910 vivieron en esta calle más de cuarenta familias diferentes, muchas de ellas ligadas a las artes textiles y a la producción de cera. La campanilla de bronce que hoy vemos en el número 12 es uno de los pocos ejemplares originales que sobrevivieron a las restauraciones del siglo XX.',
          'En 1953, parte del empedrado se rehízo con piedras procedentes de la antigua muralla medieval — un detalle poco conocido, pero que une literalmente esta calle a los orígenes defensivos de la villa.',
        ],
      },
      tabs: [
        { label: 'Historia' },
        { label: 'Galería' },
        { label: 'Curiosidades' },
        { label: 'Memorias' },
      ],
      curiosities: [
        'El número "7" grabado en una de las jambas no corresponde a una puerta — es una marca de cantería del maestro Tomé Lourenço, activo en el Fundão entre 1860 y 1890.',
        'Durante mucho tiempo estuvo prohibido pasar con carros después del atardecer, por orden del Ayuntamiento, para preservar el sosiego de los vecinos.',
        'El árbol que crece al final de la calle es una morera centenaria, plantada para abastecer la antigua industria de la seda.',
      ],
      memories: [
        {
          author: 'Maria, 78 años',
          text:
            '"Me acuerdo de las fiestas de Santo António, cuando toda la calle se llenaba de albahaca y de luz. Así sabíamos que había llegado el verano."',
        },
        {
          author: 'António, 65 años',
          text:
            '"Mi padre me contaba que aquí era donde se hacían los mejores negocios — todo se resolvía con un apretón de manos, a la puerta de la taberna del Sr. Joaquim."',
        },
      ],
      communityMemories: [
        {
          ligacao: 'Vecino de la Rua da Cale',
          date: 'Mayo 2025',
          text:
            '“Un día se juntaron todos los del barrio, cada uno puso un ingrediente e hicieron una torta del tamaño de la calle. Fue un acontecimiento memorable, en el que se concentró mucha gente, incluso personas de otras zonas.”',
        },
        {
          ligacao: 'Hijo de la calle',
          date: 'Abril 2025',
          text:
            'Mi abuelo tenía aquí el taller de zapatero. De niño, me sentaba en el escalón de la puerta a ver pasar a las señoras, con los cestos de la plaza, siempre con una palabra para nosotros.',
        },
        {
          ligacao: 'Familia con raíces en la calle',
          date: 'Marzo 2025',
          text:
            'Cuando mi madre se casó en 1972, la calle entera se asomó a la ventana. Tiraban pétalos desde los balcones. Todavía hoy, cuando paso por aquí, oigo aquel silencio en fiesta.',
        },
        {
          ligacao: 'Antigua residencia',
          date: 'Febrero 2025',
          text:
            'La Navidad aquí era diferente. Cada puerta era un belén. Íbamos de casa en casa cantando las Janeiras — recibíamos higos, nueces y a veces una copita de licor.',
        },
        {
          ligacao: 'Visitante',
          date: 'Enero 2025',
          text:
            'Vine por primera vez buscando las raíces de mi bisabuela. Encontré a una señora que aún se acordaba de su nombre. Salí de aquí con más familia de la que llegué.',
        },
      ],
      personality: {
        name: 'PADRE JOSÉ MARIA ALBERTO SOARES',
        bio:
          'Nacido en la Rua da Cale, participó activamente en la vida pública del Fundão y contribuyó a importantes mejoras en la villa, como el abastecimiento de agua y la llegada de la electricidad, en 1907. Fue un orador admirado y una figura muy estimada por la comunidad. “Pobre y enfermo, regresó un día a su Fundão, a la casa de su infancia, allí en la Rua da Cale, donde habría de fallecer en agosto de 1930.”',
      },
      related: [
        { description: 'La fortaleza que veló por la villa durante siglos.' },
        { description: 'Arte sacro y memoria colectiva en el corazón del Fundão.' },
        { description: 'El punto de encuentro de generaciones enteras.' },
      ],
    },

    // 'casa-dos-trigueiros-de-aragao' no tiene override: recae en el texto
    // neutro del generador, ya traducido arriba.
    'igreja-matriz': {
      intro_paragraph:
        'Centro espiritual y arquitectónico de la villa, siglos de fe y arte sacro. La investigación editorial está en curso.',
    },
    'praca-velha': {
      intro_paragraph:
        'El corazón público de la villa, donde se hacían ferias, fiestas e historia. Contenido en recogida junto a la comunidad.',
    },
    'praca-do-municipio': {
      intro_paragraph:
        'Centro administrativo de la villa, escenario de discursos, ferias y celebraciones. Ficha editorial en preparación.',
    },
  },

  personalities: {
    'jose-alves-monteiro': {
      eyebrow: 'Personalidad ilustre · Fundão',
      role: 'Profesor, ensayista e impulsor cultural',
      shortBio:
        'Nacido en la Rua da Cale en 1890, José Alves Monteiro fue uno de los nombres más respetados de la cultura del Fundão. Profesor, ensayista e impulsor de iniciativas asociativas, su trabajo moldeó generaciones.',
      fullBio: [
        'José Alves Monteiro nació en la casa número 14 de la Rua da Cale, en una familia modesta ligada a la pequeña industria de la seda. Asistió a la escuela primaria local y, más tarde, al instituto de Guarda, donde destacó por su vocación por las letras y por la enseñanza.',
        'Regresó al Fundão en 1912 ya con formación de profesor. Durante casi cuatro décadas dio clases en escuelas de la región y fundó círculos de lectura que acercaban a los autores nacionales a las poblaciones rurales. Fue, para muchos, "el señor profesor" — figura tutelar de varias generaciones.',
        'Más allá de la enseñanza, se dedicó al estudio de la historia local. Publicó ensayos en periódicos regionales sobre la toponimia del Fundão, la industria de la seda, las tradiciones religiosas y el papel de las mujeres trabajadoras en la villa de principios del siglo XX. Sus textos siguen siendo una fuente primaria para investigadores.',
        'Participó activamente en iniciativas asociativas: fue fundador de la Sociedade Filarmónica do Fundão (1925), colaboró con la Casa do Povo e impulsó la creación de una pequeña biblioteca pública — predecesora de la actual biblioteca municipal.',
        'La fecha exacta de su muerte sigue siendo incierta, perdida en la desorganización de los archivos de posguerra. Se sabe, por testimonios orales, que vivió al menos hasta los años 60.',
      ],
      gallery: [
        { caption: 'Casa natal en la Rua da Cale, fotografía anterior a las restauraciones de 1953.' },
        { caption: 'Manuscrito de clase sobre toponimia del Fundão, c. 1928.' },
        { caption: 'Rua da Cale, c. 1935. Archivo Municipal del Fundão.' },
        { caption: 'Recorte del "Jornal do Fundão" (1932) con ensayo sobre la industria de la seda.' },
      ],
      sources: [
        { title: 'Archivo Municipal del Fundão — registros parroquiales', type: 'Archivo' },
        { title: '"Jornal do Fundão" — colección integral', type: 'Prensa periódica' },
        { title: 'Monteiro, J. A. — Ensayos reunidos', type: 'Libro' },
        { title: 'Sociedade Filarmónica do Fundão — actas de fundación', type: 'Archivo asociativo' },
        { title: 'Entrevistas orales a antiguos alumnos (recogida 2018)', type: 'Historia oral' },
      ],
    },
  },
}

export default es
