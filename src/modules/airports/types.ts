/**
 * Interface representing an airport
 * 
 * @property {string} id - Airport ID	Unique OpenFlights identifier for this airport.
 * @property {string} name - Name	Name of airport. May or may not contain the City name.
 * @property {string} city - City	Main city served by airport. May be spelled differently from Name.
 * @property {string} country - Country	Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
 * @property {string} iata - IATA	3-letter IATA code. Null if not assigned/unknown.
 * @property {string} icao - ICAO	4-letter ICAO code.
 * @property {number} latitude - Latitude	Decimal degrees, usually to six significant digits. Negative is South, positive is North.
 * @property {number} longitude - Longitude	Decimal degrees, usually to six significant digits. Negative is West, positive is East.
 * @property {number} altitude - Altitude	In feet.
 * @property {string} timezone - Timezone	Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
 * @property {string} dst - DST	Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
 * @property {string} tz - Tz database timezone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".
 * @property {string} type - Type of the airport. Value "airport" for air terminals, "station" for train stations, "port" for ferry terminals and "unknown" if not known. In airports.csv, only type=airport is included.
 * @property {string} source - Source of this data. "OurAirports" for data sourced from OurAirports, "Legacy" for old data not matched to OurAirports (mostly DAFIF), "User" for unverified user contributions. In airports.csv, only source=OurAirports is included.
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
    type: string;
    source: string;
}
