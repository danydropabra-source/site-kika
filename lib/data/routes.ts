// ============================================================
// MOCK ROUTES — placeholder data for the "Rotas Temáticas" feature.
// Kept isolated in /lib/data so that swapping for a real backend later
// requires NO changes to components. Replace these by an API call from
// /lib/api.ts when the backend is ready.
// ============================================================

import type { Route } from '../types'

export const routes: Route[] = [
  {
    id: '8d3a6c1e-2a1b-4f3b-9c2a-7f0e1d4a9b01',
    slug: 'rota-medieval',
    title: 'Rota Medieval',
    short_description:
      'Muralhas, castelos e ruas de pedra. Um percurso pelas origens defensivas e religiosas do Fundão medieval.',
    long_description:
      'Da fortaleza de pedra que velou pela vila aos largos onde se faziam juízos e feiras, esta rota redesenha as fronteiras da vila medieval. Caminhe com calma — cada calcetamento foi pensado para durar séculos.',
    image:
      'https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    stop_count: 4,
    street_ids: ['castelo-do-fundao', 'rua-da-cale-fundao', 'praca-velha', 'igreja-matriz'],
    theme: 'Histórico',
    duration_min: 75,
    distance_km: 1.8,
  },
  {
    id: '52e7c8c4-09e6-4d51-a9a6-3b2a1f9d2c33',
    slug: 'rota-religiosa',
    title: 'Rota Religiosa',
    short_description:
      'Igrejas, capelas e devoções populares. Um itinerário pela fé que moldou ruas e calendários.',
    long_description:
      'O Fundão cresceu em volta de oragos e festas religiosas. Esta rota visita os principais espaços sacros e as ruas que ainda hoje guardam a memória das procissoes, das bandas filarmónicas e dos andores.',
    image:
      'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    stop_count: 3,
    street_ids: ['igreja-matriz', 'praca-velha', 'rua-da-cale-fundao'],
    theme: 'Religioso',
    duration_min: 55,
    distance_km: 1.2,
  },
  {
    id: 'a1b9e2f4-7c4d-4f88-8e3f-6d0a2b8c5e21',
    slug: 'patrimonio-natural',
    title: 'Património Natural',
    short_description:
      'Amoreiras, hortas, percursos de água. A natureza que sustentou a economia e a vida quotidiana.',
    long_description:
      'Antes da indústria, antes do comércio, foi a terra. Esta rota explora as zonas verdes históricas — antigas hortas, árvores centenárias e cursos de água que serviram a vila durante séculos.',
    image:
      'https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    stop_count: 3,
    street_ids: ['rua-da-cale-fundao', 'praca-velha', 'castelo-do-fundao'],
    theme: 'Natural',
    duration_min: 60,
    distance_km: 2.1,
  },
]
