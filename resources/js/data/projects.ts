export type Project = {
  slug: string;
  title: string;
  image: string;
  category: 'Residential' | 'Commercial' | 'Safety' | string;
  location: string;
  year: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'smart-home-transformation',
    title: 'Smart Home Transformation',
    image: '/images/realimages/536367114_17890315455336449_4204813031343417245_n.webp',
    category: 'Residential',
    location: 'Leeds',
    year: '2025',
    challenge: 'Outdated wiring and no smart features.',
    solution: 'Full rewire and smart system install.',
    outcome: 'Modern, energy-efficient home with remote control.',
  },
  {
    slug: 'commercial-lighting-upgrade',
    title: 'Commercial Lighting Upgrade',
    image: '/images/realimages/537001883_17890315485336449_4932020563970758367_n.webp',
    category: 'Commercial',
    location: 'Leeds',
    year: '2024',
    challenge: 'High energy bills and poor lighting.',
    solution: 'LED lighting and controls upgrade.',
    outcome: 'Lower bills and brighter workspace.',
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    image: '/images/realimages/482556962_17868580332336449_8498625874841183630_n.webp',
    category: 'Residential',
    location: 'Harrogate',
    year: '2025',
    challenge: 'Homeowner needed reliable overnight charging.',
    solution: 'Installed 7kW wallbox with dedicated circuit and load balancing.',
    outcome: 'Safe, fast charging with smart scheduling.',
  },
  {
    slug: 'kitchen-countertop-sockets',
    title: 'Kitchen Countertop Sockets',
    image: '/images/realimages/Electrician Leed 9.webp',
    category: 'Residential',
    location: 'Leeds',
    year: '2025',
    challenge: 'Customer needed 3 extra sockets installed on new-build kitchen countertops.',
    solution: 'Installed additional countertop sockets with minimal disruption and tidy patchwork.',
    outcome: 'New sockets fitted cleanly; surfaces patched and ready for finishing.',
  },
  {
    slug: 'restaurant-lighting-upgrade-garforth',
    title: 'Restaurant Lighting Upgrade (Garforth)',
    image: '/images/realimages/Electrician Leed 11.webp',
    category: 'Commercial',
    location: 'Garforth',
    year: '2025',
    challenge: 'Upstairs restaurant needed modern, even lighting for newly created seating area.',
    solution: 'Replaced two pendants with a track system using 14 adjustable LED heads to direct light to each table; added recessed LED spotlights along the corridor to the toilets.',
    outcome: 'Brighter ambiance with targeted table lighting and improved corridor illumination.',
  },
  {
    slug: 'garage-power-lighting-meanwood',
    title: 'Garage Power & Lighting (Meanwood)',
    image: '/images/realimages/Electrician Leed 13.webp',
    category: 'Residential',
    location: 'Meanwood',
    year: '2025',
    challenge: 'Customer needed lighting and power added to a garage to convert it into a future kitchen for a baking business.',
    solution: 'Installed new outlets in plastic conduit for protection and tidy routing, plus a small garage consumer unit to protect circuits individually.',
    outcome: 'Safe, tidy installation with dedicated circuit protection ready for future kitchen use.',
  },
];
