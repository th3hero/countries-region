/**
 * Interface representing a country
 */
export interface Country {
  /**
   * The name of the country
   */
  name: string;

  /**
   * The ISO 3166-1 alpha-2 code of the country (2 letters)
   */
  iso2: string;

  /**
   * The ISO 3166-1 alpha-3 code of the country (3 letters)
   */
  iso3: string;

  /**
   * The numeric code of the country
   */
  numericCode: string;

  /**
   * The region the country belongs to
   */
  region: string;

  /**
   * The subregion the country belongs to
   */
  subregion: string;

  /**
   * The slug version of the country name (lowercase, hyphenated)
   */
  slug: string;

  /**
   * The capital city of the country
   */
  capital: string;

  /**
   * The flag information of the country
   */
  flag: {
    /**
     * The flag emoji of the country
     */
    emoji?: string;
    /**
     * The PNG URL of the country flag
     */
    png?: string;
    /**
     * The SVG URL of the country flag
     */
    svg?: string;
    /**
     * Description of the country flag
     */
    alt?: string;
  };

  /**
   * Description about the country
   */
  about?: string;

  /**
   * Phone code of the country
   */
  phone?: string;

  /**
   * Currency information of the country
   */
  currency?: {
    [code: string]: {
      /**
       * Currency symbol
       */
      symbol: string;
      /**
       * Currency name
       */
      name: string;
    };
  };
}

/**
 * Interface representing a region
 */
export interface Region {
  /**
   * The name of the region
   */
  name: string;

  /**
   * The slug version of the region name (lowercase, hyphenated)
   */
  slug: string;

  /**
   * The subregions within this region
   */
  subregions: string[];

  /**
   * Description about the region
   */
  about?: string;

  /**
   * Media or icons related to the region
   */
  media?: {
    /**
     * Icon or image URL
     */
    icon?: string;
    /**
     * Additional media URLs
     */
    images?: string[];
  };
}
