# Countries Region

[![npm version](https://img.shields.io/npm/v/countries-region.svg)](https://www.npmjs.com/package/countries-region)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive library for countries and regions data with TypeScript support.

## Features

- Get a list of all countries and regions
- Filter countries by region or subregion
- Find countries by code (ISO 2-letter or 3-letter)
- Find countries by slug
- Search countries by name
- TypeScript support with type definitions
- Support for both CommonJS and ES Modules

## Installation

```bash
npm install countries-region
```

## Usage

### ES Modules

```javascript
import { 
  getCountries, 
  getRegions, 
  countriesOfRegion,
  countryByISO2 
} from 'countries-region';

// Get all countries
const countries = getCountries();
console.log(countries);

// Get all regions
const regions = getRegions();
console.log(regions);

// Get countries in Europe
const europeCountries = countriesOfRegion('europe');
console.log(europeCountries);

// Find a country by its code
const country = countryByISO2('US');
console.log(country);
```

### CommonJS

```javascript
const { 
  getCountries, 
  getRegions, 
  countriesOfRegion,
  countryByISO2 
} = require('countries-region');

// Get all countries
const countries = getCountries();
console.log(countries);

// Get all regions
const regions = getRegions();
console.log(regions);

// Get countries in Europe
const europeCountries = countriesOfRegion('europe');
console.log(europeCountries);

// Find a country by its code
const country = countryByISO2('US');
console.log(country);
```

## API

### Countries

#### `getCountries()`

Returns an array of all countries.

```javascript
const countries = getCountries();
```

#### `countriesOfRegion(regionSlug)`

Returns an array of countries in the specified region.

```javascript
const europeCountries = countriesOfRegion('europe');
```

#### `countriesOfSubRegion(subregion)`

Returns an array of countries in the specified subregion.

```javascript
const southernEuropeCountries = countriesOfSubRegion('Southern Europe');
```

#### `countryByISO2(code)`

Finds a country by its 2-letter ISO code.

```javascript
const country = countryByISO2('US');
```

#### `countryByISO3(code3)`

Finds a country by its 3-letter ISO code.

```javascript
const country = countryByISO3('USA');
```

#### `countryBySlug(slug)`

Finds a country by its slug.

```javascript
const country = countryBySlug('united-states');
```

#### `countryByName(query)`

Searches countries by name.

```javascript
const countries = countryByName('united');
```

### Regions

#### `getRegions()`

Returns an array of all regions.

```javascript
const regions = getRegions();
```

#### `regionBySlug(slug)`

Finds a region by its slug.

```javascript
const region = regionBySlug('europe');
```

### Airports

#### `getAirports()`

Returns a Promise that resolves to an array of all airports. Each airport object contains detailed information including:
- Airport name and city
- Country location
- IATA and ICAO codes
- Geographic coordinates (latitude, longitude, altitude)
- Timezone information
- Type and source of data

```javascript
import { getAirports } from 'countries-region';

// Get all airports
const airports = await getAirports();
console.log(airports);

// Example airport object
{
    id: "1",
    name: "Goroka Airport",
    city: "Goroka",
    country: "Papua New Guinea",
    iata: "GKA",
    icao: "AYGA",
    latitude: -6.081689834590001,
    longitude: 145.391998291,
    altitude: 5282,
    timezone: "10",
    dst: "U",
    tz: "Pacific/Port_Moresby",
    type: "airport",
    source: "OurAirports"
}
```

### Direct Exports

The package also exports the types and data directly for advanced usage:

```javascript
import { Country, Region, countries, regions } from 'countries-region';

// Use the exported data directly
console.log(countries.length);
console.log(regions.map(r => r.name));
```

## Types

The package includes TypeScript type definitions for all data structures.

```typescript
import {Country, Region} from 'countries-region';

// Use the types in your code
const myCountry: Country = {
    name: "India",
    iso2: "IN",
    iso3: "IND",
    numericCode: "356",
    region: "asia",
    subregion: "Southern Asia",
    slug: "india",
    capital: "New Delhi",
    flag: {
        emoji: "🇮🇳",
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
        alt: "The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes — the Ashoka Chakra — is centered in the white band."
    },
    about: "India, officially the Republic of India, is a country in South Asia.  It is the seventh-largest country by area; the most populous country from June 2023 onwards; and since its independence in 1947, the world's most populous democracy. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is near Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.\nModern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago. Their long occupation, predominantly in isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity. Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE. By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest. Its hymns recorded the dawning of Hinduism in India. India's pre-existing Dravidian languages were supplanted in the northern regions. By 400 BCE, caste had emerged within Hinduism, and Buddhism and Jainism had arisen, proclaiming social orders unlinked to heredity. Early political consolidations gave rise to the loose-knit Maurya and Gupta Empires. Widespread creativity suffused this era, but the status of women declined, and untouchability became an organized belief. In South India, the Middle kingdoms exported Dravidian language scripts and religious cultures to the kingdoms of Southeast Asia.\nIn the early medieval era, Christianity, Islam, Judaism, and Zoroastrianism became established on India's southern and western coasts. Muslim armies from Central Asia intermittently overran India's northern plains. The resulting Delhi Sultanate drew northern India into the cosmopolitan networks of medieval Islam. In south India, the Vijayanagara Empire created a long-lasting composite Hindu culture. In the Punjab, Sikhism emerged, rejecting institutionalised religion. The Mughal Empire, in 1526, ushered in two centuries of relative peace, leaving a legacy of luminous architecture. Gradually expanding rule of the British East India Company  turned India into a colonial economy but consolidated its sovereignty. British Crown rule began in 1858. The rights promised to Indians were granted slowly, but technological changes were introduced, and modern ideas of education and public life took root. A pioneering and influential nationalist movement, noted for nonviolent resistance, became the major factor in ending British rule. In 1947, the British Indian Empire was partitioned into two independent dominions, a Hindu-majority dominion of India and a Muslim-majority dominion of Pakistan. A large-scale loss of life and an unprecedented migration accompanied the partition.\nIndia has been a federal republic since 1950, governed through a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society. India's population grew from 361 million in 1951 to over 1.4 billion in 2023.\nDuring this time, its nominal per capita income increased from US$64 annually to US$2,601, and its literacy rate from 16.6% to 74%. A comparatively destitute country in 1951, India has become a fast-growing major economy and hub for information technology services; it has an expanding middle class. Indian movies and music increasingly influence global culture. India has reduced its poverty rate, though at the cost of increasing economic inequality. It is a nuclear-weapon state that ranks high in military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since the mid-20th century. Among the socio-economic challenges India faces are gender inequality, child malnutrition, and rising levels of air pollution. India's land is megadiverse with four biodiversity hotspots. India's wildlife, which has traditionally been viewed with tolerance in its culture, is supported in protected habitats.",
    phone: "+91",
    currency: {
        "INR": {
            "symbol": "₹",
            "name": "Indian rupee"
        }
    }
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Add & Commit your changes with a message (`git commit -am 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/th3hero/countries-region/issues).

## Repository

- [GitHub Repository](https://github.com/th3hero/countries-region)

## Authors

- [Alok Kumar](https://th3hero.github.io)
- [Arjun Puri](https://github.com/arjun-puri-owl)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
