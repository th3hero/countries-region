import {
    countriesOfRegion,
    countriesOfSubRegion,
    countryByISO2,
    countryByISO3, countryByName, countryBySlug,
    getCountries,
    getRegions, regionBySlug
} from '../index';

describe('Countries and Regions Module', () => {
    describe('getAllCountries', () => {
        it('should return an array of countries', () => {
            const countries = getCountries();
            expect(Array.isArray(countries)).toBe(true);
            expect(countries.length).toBeGreaterThan(0);
        });

        it('should return a copy of the countries array', () => {
            const countries1 = getCountries();
            const countries2 = getCountries();
            expect(countries1).not.toBe(countries2);
        });
    });

    describe('getAllRegions', () => {
        it('should return an array of regions', () => {
            const regions = getRegions();
            expect(Array.isArray(regions)).toBe(true);
            expect(regions.length).toBeGreaterThan(0);
        });

        it('should return a copy of the regions array', () => {
            const regions1 = getRegions();
            const regions2 = getRegions();
            expect(regions1).not.toBe(regions2);
        });
    });

    describe('getCountriesByRegion', () => {
        it('should return countries from a specific region', () => {
            const europeCountries = countriesOfRegion('europe');
            expect(Array.isArray(europeCountries)).toBe(true);
            expect(europeCountries.length).toBeGreaterThan(0);
            europeCountries.forEach(country => {
                expect(country.region).toBe('Europe');
            });
        });

        it('should be case insensitive', () => {
            const europeCountries1 = countriesOfRegion('europe');
            const europeCountries2 = countriesOfRegion('EUROPE');
            expect(europeCountries1).toEqual(europeCountries2);
        });

        it('should return an empty array for non-existent region', () => {
            const countries = countriesOfRegion('non-existent-region');
            expect(Array.isArray(countries)).toBe(true);
            expect(countries.length).toBe(0);
        });
    });

    describe('getCountriesBySubregion', () => {
        it('should return countries from a specific subregion', () => {
            const southernEuropeCountries = countriesOfSubRegion('Southern Europe');
            expect(Array.isArray(southernEuropeCountries)).toBe(true);
            expect(southernEuropeCountries.length).toBeGreaterThan(0);
            southernEuropeCountries.forEach(country => {
                expect(country.subregion).toBe('Southern Europe');
            });
        });

        it('should be case insensitive', () => {
            const southernEuropeCountries1 = countriesOfSubRegion('Southern Europe');
            const southernEuropeCountries2 = countriesOfSubRegion('southern europe');
            expect(southernEuropeCountries1).toEqual(southernEuropeCountries2);
        });

        it('should return an empty array for non-existent subregion', () => {
            const countries = countriesOfSubRegion('non-existent-subregion');
            expect(Array.isArray(countries)).toBe(true);
            expect(countries.length).toBe(0);
        });
    });

    describe('findCountryByCode', () => {
        it('should find a country by its 2-letter code', () => {
            const country = countryByISO2('US');
            expect(country).toBeDefined();
            if (country) {
                expect(country.iso2).toBe('US');
            }
        });

        it('should be case insensitive', () => {
            const country1 = countryByISO2('us');
            const country2 = countryByISO2('US');
            expect(country1).toEqual(country2);
        });

        it('should return undefined for non-existent code', () => {
            const country = countryByISO2('XX');
            expect(country).toBeUndefined();
        });
    });

    describe('findCountryByCode3', () => {
        it('should find a country by its 3-letter code', () => {
            const country = countryByISO3('USA');
            expect(country).toBeDefined();
            if (country) {
                expect(country.iso3).toBe('USA');
            }
        });

        it('should be case insensitive', () => {
            const country1 = countryByISO3('usa');
            const country2 = countryByISO3('USA');
            expect(country1).toEqual(country2);
        });

        it('should return undefined for non-existent code', () => {
            const country = countryByISO3('XXX');
            expect(country).toBeUndefined();
        });
    });

    describe('findCountryBySlug', () => {
        it('should find a country by its slug', () => {
            const country = countryBySlug('united-states');
            expect(country).toBeDefined();
            if (country) {
                expect(country.slug).toBe('united-states');
            }
        });

        it('should be case insensitive', () => {
            const country1 = countryBySlug('united-states');
            const country2 = countryBySlug('UNITED-STATES');
            expect(country1).toEqual(country2);
        });

        it('should return undefined for non-existent slug', () => {
            const country = countryBySlug('non-existent-country');
            expect(country).toBeUndefined();
        });
    });

    describe('searchCountriesByName', () => {
        it('should find countries by name', () => {
            const countries = countryByName('united');
            expect(Array.isArray(countries)).toBe(true);
            expect(countries.length).toBeGreaterThan(0);
            countries.forEach(country => {
                expect(country.name.toLowerCase()).toContain('united');
            });
        });

        it('should be case insensitive', () => {
            const countries1 = countryByName('united');
            const countries2 = countryByName('UNITED');
            expect(countries1).toEqual(countries2);
        });

        it('should return an empty array for non-matching query', () => {
            const countries = countryByName('xyzabc123');
            expect(Array.isArray(countries)).toBe(true);
            expect(countries.length).toBe(0);
        });
    });

    describe('findRegionBySlug', () => {
        it('should find a region by its slug', () => {
            const region = regionBySlug('europe');
            expect(region).toBeDefined();
            if (region) {
                expect(region.slug).toBe('europe');
            }
        });

        it('should be case insensitive', () => {
            const region1 = regionBySlug('europe');
            const region2 = regionBySlug('EUROPE');
            expect(region1).toEqual(region2);
        });

        it('should return undefined for non-existent slug', () => {
            const region = regionBySlug('non-existent-region');
            expect(region).toBeUndefined();
        });
    });
});