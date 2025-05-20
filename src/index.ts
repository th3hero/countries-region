import {Country, Region} from './types';
import {countries} from './data/countries';
import {regions} from './data/regions';
import {getAirports} from './modules/airports';
import type {Airport} from './modules/airports/types';

/**
 * Get all countries
 * @returns Array of all countries
 */
export function getCountries(): Country[] {
    return [...countries];
}

/**
 * Get all regions
 * @returns Array of all regions
 */
export function getRegions(): Region[] {
    return [...regions];
}

/**
 * Get countries by region
 * @param regionSlug - The slug of the region to filter by
 * @returns Array of countries in the specified region
 */
export function countriesOfRegion(regionSlug: string): Country[] {
    const region = regionSlug.toLowerCase();
    const data = regions.find(r => r.slug === region);
    if (!data) {
        return [];
    }
    return countries.filter(country => country.region.toLowerCase() === region);
}

/**
 * Get countries by subregion
 * @param subregion - The name of the subregion to filter by
 * @returns Array of countries in the specified subregion
 */
export function countriesOfSubRegion(subregion: string): Country[] {
    const normalizedSubRegion = subregion.toLowerCase();
    return countries.filter(country =>
        country.subregion.toLowerCase() === normalizedSubRegion
    );
}

/**
 * Find a country by its code (2-letter ISO code)
 * @param code - The 2-letter ISO code of the country
 * @returns The country object or undefined if not found
 */
export function countryByISO2(code: string): Country | undefined {
    const iso2 = code.toUpperCase();
    return countries.find(country => country.iso2 === iso2);
}

/**
 * Find a country by its 3-letter ISO code
 * @param code3 - The 3-letter ISO code of the country
 * @returns The country object or undefined if not found
 */
export function countryByISO3(code3: string): Country | undefined {
    const iso3 = code3.toUpperCase();
    return countries.find(country => country.iso3 === iso3);
}

/**
 * Find a country by its slug
 * @param slug - The slug of the country
 * @returns The country object or undefined if not found
 */
export function countryBySlug(slug: string): Country | undefined {
    const countrySlug = slug.toLowerCase();
    return countries.find(country => country.slug === countrySlug);
}

/**
 * Search countries by name
 * @param query - The search query
 * @returns Array of countries that match the search query
 */
export function countryByName(query: string): Country[] {
    const name = query.toLowerCase();
    return countries.filter(country =>
        country.name.toLowerCase().includes(name)
    );
}

/**
 * Find a region by its slug
 * @param slug - The slug of the region
 * @returns The region object or undefined if not found
 */
export function regionBySlug(slug: string): Region | undefined {
    const regionSlug = slug.toLowerCase();
    return regions.find(region => region.slug === regionSlug);
}

/**
 * Search regions by its name
 * @param query - The slug of the region
 * @returns The array of regions that match the search query
 */
export function regionsByName(query: string): Region[] {
    const name = query.toLowerCase();
    return regions.filter(region => region.name.toLowerCase().includes(name));
}

// Export types and data for advanced usage
export {Country, Region};
export {countries, regions};
export {Airport, getAirports};