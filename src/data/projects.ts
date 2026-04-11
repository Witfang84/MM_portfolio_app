export interface Project {
  id: number;
  company: string;
  title: string;
  description: string;
  tags: string[];
  color: string;           // card accent color
  image?: string;          // path to screenshot in /public/projects/
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    company: 'Allegro',
    title: 'AI Dynamic Query Narrowing for Search & Discovery',
    description: 'Designing an AI-assisted narrowing system that interprets vague queries and surfaces contextual filters in real time.',
    tags: ['Search', 'AI', 'Discovery'],
    color: '#ff6622',
    image: '/MM_portfolio_app/projects/allegro-search.png',
  },
  {
    id: 2,
    company: 'Allegro',
    title: 'Reframing Product Discovery Through Filters at Scale',
    description: 'End-to-end redesign of the filtering system across web and mobile to reduce drop-off and increase conversion.',
    tags: ['Filters', 'Mobile', 'Conversion'],
    color: '#006a26',
    image: '/MM_portfolio_app/projects/allegro-filters.png',
  },
  {
    id: 3,
    company: 'Allegro',
    title: 'Product Variants on the Purchase Path',
    description: 'Rethinking how variant selection (size, color, type) integrates into the purchase flow to minimise friction.',
    tags: ['Variants', 'Purchase', 'UX'],
    color: '#fdec00',
    image: '/MM_portfolio_app/projects/allegro-variants.png',
  },
];
