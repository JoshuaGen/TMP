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
