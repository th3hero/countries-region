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
import { Country, Region } from 'countries-region';

// Use the types in your code
const myCountry: Country = {
  name: 'Custom Country',
  code: 'CC',
  code3: 'CCC',
  numericCode: '999',
  region: 'Custom Region',
  subregion: 'Custom Subregion',
  slug: 'custom-country',
  capital: 'Custom Capital',
  flag: '🏳️'
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/th3hero/countries-region/issues).

## Repository

- [GitHub Repository](https://github.com/th3hero/countries-region)

## Authors

- Alok Kumar
- Arjun Puri

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
