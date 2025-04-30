import { Region } from '../types';

/**
 * List of world regions with their subregions
 */
export const regions: Region[] = [
  {
    name: 'Africa',
    slug: 'africa',
    subregions: [
      'Eastern Africa',
      'Middle Africa',
      'Northern Africa',
      'Southern Africa',
      'Western Africa'
    ],
    about: 'Africa is the world\'s second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km², it covers 6% of Earth\'s total surface area and 20% of its land area.'
  },
  {
    name: 'Americas',
    slug: 'americas',
    subregions: [
      'Caribbean',
      'Central America',
      'Northern America',
      'South America'
    ],
    about: 'The Americas, which are sometimes collectively called America, are a landmass comprising the totality of North and South America. The Americas make up most of the land in Earth\'s Western Hemisphere and comprise the New World.',
    media: {
      icon: 'https://example.com/icons/americas.svg',
      images: ['https://example.com/images/americas1.jpg', 'https://example.com/images/americas2.jpg']
    }
  },
  {
    name: 'Asia',
    slug: 'asia',
    subregions: [
      'Central Asia',
      'Eastern Asia',
      'South-Eastern Asia',
      'Southern Asia',
      'Western Asia'
    ],
    about: 'Asia is Earth\'s largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa.',
    media: {
      icon: 'https://example.com/icons/asia.svg',
      images: ['https://example.com/images/asia1.jpg', 'https://example.com/images/asia2.jpg']
    }
  },
  {
    name: 'Europe',
    slug: 'europe',
    subregions: [
      'Eastern Europe',
      'Northern Europe',
      'Southern Europe',
      'Western Europe'
    ],
    about: 'Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost peninsulas of the continental landmass of Eurasia, and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east.',
    media: {
      icon: 'https://example.com/icons/europe.svg',
      images: ['https://example.com/images/europe1.jpg', 'https://example.com/images/europe2.jpg']
    }
  },
  {
    name: 'Oceania',
    slug: 'oceania',
    subregions: [
      'Australia and New Zealand',
      'Melanesia',
      'Micronesia',
      'Polynesia'
    ],
    about: 'Oceania is a geographic region that includes Australasia, Melanesia, Micronesia, and Polynesia. Spanning the Eastern and Western Hemispheres, Oceania has a land area of 8,525,989 square kilometres and a population of over 41 million.',
    media: {
      icon: 'https://example.com/icons/oceania.svg',
      images: ['https://example.com/images/oceania1.jpg', 'https://example.com/images/oceania2.jpg']
    }
  },
  {
    name: 'Antarctic',
    slug: 'antarctic',
    subregions: [
      'Antarctic'
    ],
    about: 'Antarctica is Earth\'s southernmost continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean, it contains the geographic South Pole. Antarctica is the fifth-largest continent, being nearly twice the size of Australia, and has an area of 14,200,000 km².',
    media: {
      icon: 'https://example.com/icons/antarctic.svg',
      images: ['https://example.com/images/antarctic1.jpg', 'https://example.com/images/antarctic2.jpg']
    }
  }
];
