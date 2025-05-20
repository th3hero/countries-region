/**
 * Interface representing an airport
 * 
 * @property {string} id - Unique OpenFlights identifier for this airport.
 * @property {string} name - Name of the airport, which may or may not contain the city name.
 * @property {string} city - Main city served by the airport, which may be spelled differently from the name.
 * @property {string} country - Country or territory where the airport is located. See Countries to cross-reference to ISO 3166-1 codes.
 * @property {string} iata - 3-letter IATA code. Null if not assigned or unknown.
 * @property {string} icao - 4-letter ICAO code.
 * @property {number} latitude - Latitude in decimal degrees, usually to six significant digits. Negative is South, positive is North.
 * @property {number} longitude - Longitude in decimal degrees, usually to six significant digits. Negative is West, positive is East.
 * @property {number} altitude - Altitude in feet.
 * @property {string} timezone - Hours offset from UTC. Fractional hours are expressed as decimals, e.g., India is 5.5.
 * @property {string} dst - Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None), or U (Unknown).
 * @property {string} tz - Timezone in "tz" (Olson) format, e.g., "America/Los_Angeles".
 * @property {string} type - Type of the airport. Value is "airport" for air terminals, "station" for train stations, "port" for ferry terminals, and "unknown" if not known. In airports.csv, only type=airport is included.
 * @property {string} source - Source of this data. "OurAirports" for data sourced from OurAirports, "Legacy" for old data not matched to OurAirports (mostly DAFIF), and "User" for unverified user contributions. In airports.csv, only source=OurAirports is included.
 */
export type Airport = {
    id: string;
    name: string;
    city: string;
    country: string;
    iata: string;
    icao: string;
    latitude: number;
    longitude: number;
    altitude: number;
    timezone: string;
    dst: string;
    tz: string;
    type: 'airport' | 'station' | 'port' | 'unknown';
    source: 'OurAirports' | 'Legacy' | 'User';
}
