import {Country} from '../types';

/**
 * List of countries with their details
 * This is a representative sample of countries from each region
 */
export const countries: Country[] = [
    // Africa
    {
        name: 'Egypt',
        iso2: 'EG',
        iso3: 'EGY',
        numericCode: '818',
        region: 'Africa',
        subregion: 'Northern Africa',
        slug: 'egypt',
        capital: 'Cairo',
        flag: {
            emoji: '🇪🇬',
            png: "https://flagcdn.com/w320/eg.png",
            svg: "https://flagcdn.com/eg.svg",
            alt: "The flag of Egypt is composed of three equal horizontal bands of red, white and black, with Egypt's national emblem — a gold eagle of Saladin — centered in the white band."
        },
        about: 'Egypt, officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia via a land bridge formed by the Sinai Peninsula.',
        phone: '+20',
        currency: {
            EGP: {
                symbol: 'E£',
                name: 'Egyptian Pound'
            }
        }
    },
    {
        name: 'Kenya',
        iso2: 'KE',
        iso3: 'KEN',
        numericCode: '404',
        region: 'Africa',
        subregion: 'Eastern Africa',
        slug: 'kenya',
        capital: 'Nairobi',
        flag: {
            emoji: '🇰🇪',
            png: "https://flagcdn.com/w320/ke.png",
            svg: "https://flagcdn.com/ke.svg",
            alt: "The flag of Kenya is composed of three equal horizontal bands of black, red with white edges, and green from top to bottom. It has a large Maasai shield covering two crossed white spears centered on the red band."
        },
        about: 'Kenya, officially the Republic of Kenya, is a country in Eastern Africa. At 580,367 square kilometres, Kenya is the world\'s 48th largest country by area.',
        phone: '+254',
        currency: {
            KES: {
                symbol: 'Ksh',
                name: 'Kenyan Shilling'
            }
        }
    },
    {
        name: 'Nigeria',
        iso2: 'NG',
        iso3: 'NGA',
        numericCode: '566',
        region: 'Africa',
        subregion: 'Western Africa',
        slug: 'nigeria',
        capital: 'Abuja',
        flag: {
            emoji: '🇳🇬',
            png: "https://flagcdn.com/w320/ng.png",
            svg: "https://flagcdn.com/ng.svg",
            alt: "The flag of Nigeria is composed of three equal vertical bands of green, white and green."
        },
        about: 'Nigeria, officially the Federal Republic of Nigeria, is a country in West Africa. It is the most populous country in Africa and the seventh-most populous country in the world.',
        phone: '+234',
        currency: {
            NGN: {
                symbol: '₦',
                name: 'Nigerian Naira'
            }
        }
    },
    {
        name: 'South Africa',
        iso2: 'ZA',
        iso3: 'ZAF',
        numericCode: '710',
        region: 'Africa',
        subregion: 'Southern Africa',
        slug: 'south-africa',
        capital: 'Pretoria',
        flag: {
            emoji: '🇿🇦',
            png: "https://flagcdn.com/w320/za.png",
            svg: "https://flagcdn.com/za.svg",
            alt: "The flag of South Africa is composed of two equal horizontal bands of red and blue, with a centered black isosceles triangle that extends horizontally to the hoist end and has a yellow-edged green horizontal band superimposed on it."
        },
        about: 'South Africa, officially the Republic of South Africa (RSA), is the southernmost country in Africa. It is bounded to the south by 2,798 kilometres of coastline that stretch along the South Atlantic and Indian Oceans.',
        phone: '+27',
        currency: {
            ZAR: {
                symbol: 'R',
                name: 'South African Rand'
            }
        }
    },

    // Americas
    {
        name: 'Brazil',
        iso2: 'BR',
        iso3: 'BRA',
        numericCode: '076',
        region: 'Americas',
        subregion: 'South America',
        slug: 'brazil',
        capital: 'Brasília',
        flag: {
            emoji: '🇧🇷',
            png: "https://flagcdn.com/w320/br.png",
            svg: "https://flagcdn.com/br.svg",
            alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small white five-pointed stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
        },
        about: 'Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. It is the world\'s fifth-largest country by area and the seventh most populous.',
        phone: '+55',
        currency: {
            BRL: {
                symbol: 'R$',
                name: 'Brazilian Real'
            }
        }
    },
    {
        name: 'Canada',
        iso2: 'CA',
        iso3: 'CAN',
        numericCode: '124',
        region: 'Americas',
        subregion: 'Northern America',
        slug: 'canada',
        capital: 'Ottawa',
        flag: {
            emoji: '🇨🇦',
            png: "https://flagcdn.com/w320/ca.png",
            svg: "https://flagcdn.com/ca.svg",
            alt: "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a white square between the bands. A large eleven-pointed red maple leaf is centered in the white square."
        },
        about: 'Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world\'s second-largest country by total area.',
        phone: '+1',
        currency: {
            CAD: {
                symbol: '$',
                name: 'Canadian Dollar'
            }
        }
    },
    {
        name: 'United States',
        iso2: 'US',
        iso3: 'USA',
        numericCode: '840',
        region: 'Americas',
        subregion: 'Northern America',
        slug: 'united-states',
        capital: 'Washington, D.C.',
        flag: {
            emoji: '🇺🇸',
            png: "https://flagcdn.com/w320/us.png",
            svg: "https://flagcdn.com/us.svg",
            alt: "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton."
        },
        about: 'The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands, and 326 Indian reservations.',
        phone: '+1',
        currency: {
            USD: {
                symbol: '$',
                name: 'United States Dollar'
            }
        }
    },
    {
        name: 'Mexico',
        iso2: 'MX',
        iso3: 'MEX',
        numericCode: '484',
        region: 'Americas',
        subregion: 'Central America',
        slug: 'mexico',
        capital: 'Mexico City',
        flag: {
            emoji: '🇲🇽',
            png: "https://flagcdn.com/w320/mx.png",
            svg: "https://flagcdn.com/mx.svg",
            alt: "The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band."
        },
        about: 'Mexico, officially the United Mexican States, is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico.',
        phone: '+52',
        currency: {
            MXN: {
                symbol: '$',
                name: 'Mexican Peso'
            }
        }
    },
    {
        name: 'Jamaica',
        iso2: 'JM',
        iso3: 'JAM',
        numericCode: '388',
        region: 'Americas',
        subregion: 'Caribbean',
        slug: 'jamaica',
        capital: 'Kingston',
        flag: {
            emoji: '🇯🇲',
            png: "https://flagcdn.com/w320/jm.png",
            svg: "https://flagcdn.com/jm.svg",
            alt: "The flag of Jamaica is divided by a gold diagonal cross into four triangular parts. The top and bottom parts are green and the hoist and fly parts are black."
        },
        about: 'Jamaica is an island country situated in the Caribbean Sea. Spanning 10,990 square kilometres in area, it is the third-largest island of the Greater Antilles and the Caribbean.',
        phone: '+1-876',
        currency: {
            JMD: {
                symbol: 'J$',
                name: 'Jamaican Dollar'
            }
        }
    },

    // Asia
    {
        name: 'China',
        iso2: 'CN',
        iso3: 'CHN',
        numericCode: '156',
        region: 'Asia',
        subregion: 'Eastern Asia',
        slug: 'china',
        capital: 'Beijing',
        flag: {
            emoji: '🇨🇳',
            png: "https://flagcdn.com/w320/cn.png",
            svg: "https://flagcdn.com/cn.svg",
            alt: "The flag of China has a red field with five golden-yellow five-pointed stars in its canton."
        },
        about: 'China, officially the People\'s Republic of China, is a country in East Asia. It is the world\'s most populous country with a population exceeding 1.4 billion.',
        phone: '+86',
        currency: {
            CNY: {
                symbol: '¥',
                name: 'Chinese Yuan'
            }
        }
    },
    {
        name: 'India',
        iso2: 'IN',
        iso3: 'IND',
        numericCode: '356',
        region: 'Asia',
        subregion: 'Southern Asia',
        slug: 'india',
        capital: 'New Delhi',
        flag: {
            emoji: '🇮🇳',
            png: "https://flagcdn.com/w320/in.png",
            svg: "https://flagcdn.com/in.svg",
            alt: "The flag of India is composed of three equal horizontal bands of saffron, white and green, with a navy blue wheel centered in the white band."
        },
        about: 'India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country from June 2023 onwards; and since its independence in 1947, the world\'s most populous democracy',
        phone: '+91',
        currency: {
            INR: {
                symbol: '₹',
                name: 'Indian Rupee'
            }
        }
    },
    {
        name: 'Japan',
        iso2: 'JP',
        iso3: 'JPN',
        numericCode: '392',
        region: 'Asia',
        subregion: 'Eastern Asia',
        slug: 'japan',
        capital: 'Tokyo',
        flag: {
            emoji: '🇯🇵',
            png: "https://flagcdn.com/w320/jp.png",
            svg: "https://flagcdn.com/jp.svg",
            alt: "The flag of Japan has a white rectangular field with a large crimson-red disc at its center."
        },
        about: 'Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan.',
        phone: '+81',
        currency: {
            JPY: {
                symbol: '¥',
                name: 'Japanese Yen'
            }
        }
    },
    {
        name: 'Thailand',
        iso2: 'TH',
        iso3: 'THA',
        numericCode: '764',
        region: 'Asia',
        subregion: 'South-Eastern Asia',
        slug: 'thailand',
        capital: 'Bangkok',
        flag: {
            emoji: '🇹🇭',
            png: "https://flagcdn.com/w320/th.png",
            svg: "https://flagcdn.com/th.svg",
            alt: "The flag of Thailand is composed of five horizontal bands of red, white, blue, white and red, with the central blue band twice the height of the other four bands."
        },
        about: 'Thailand is a country in Southeast Asia, located at the center of the Indochinese Peninsula. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples.',
        phone: '+66',
        currency: {
            THB: {
                symbol: '฿',
                name: 'Thai Baht'
            }
        }
    },

    // Europe
    {
        name: 'France',
        iso2: 'FR',
        iso3: 'FRA',
        numericCode: '250',
        region: 'Europe',
        subregion: 'Western Europe',
        slug: 'france',
        capital: 'Paris',
        flag: {
            emoji: '🇫🇷',
            png: "https://flagcdn.com/w320/fr.png",
            svg: "https://flagcdn.com/fr.svg",
            alt: "The flag of France is composed of three equal vertical bands of blue, white and red."
        },
        about: 'France, officially the French Republic, is a country primarily located in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans.',
        phone: '+33',
        currency: {
            EUR: {
                symbol: '€',
                name: 'Euro'
            }
        }
    },
    {
        name: 'Germany',
        iso2: 'DE',
        iso3: 'DEU',
        numericCode: '276',
        region: 'Europe',
        subregion: 'Western Europe',
        slug: 'germany',
        capital: 'Berlin',
        flag: {
            emoji: '🇩🇪',
            png: "https://flagcdn.com/w320/de.png",
            svg: "https://flagcdn.com/de.svg",
            alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold."
        },
        about: 'Germany, officially the Federal Republic of Germany, is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union.',
        phone: '+49',
        currency: {
            EUR: {
                symbol: '€',
                name: 'Euro'
            }
        }
    },
    {
        name: 'Italy',
        iso2: 'IT',
        iso3: 'ITA',
        numericCode: '380',
        region: 'Europe',
        subregion: 'Southern Europe',
        slug: 'italy',
        capital: 'Rome',
        flag: {
            emoji: '🇮🇹',
            png: "https://flagcdn.com/w320/it.png",
            svg: "https://flagcdn.com/it.svg",
            alt: "The flag of Italy is composed of three equal vertical bands of green, white and red."
        },
        about: 'Italy, officially the Italian Republic, is a country located in the middle of the Mediterranean Sea, in Southern Europe. It consists of a peninsula delimited by the Alps and surrounded by several islands.',
        phone: '+39',
        currency: {
            EUR: {
                symbol: '€',
                name: 'Euro'
            }
        }
    },
    {
        name: 'United Kingdom',
        iso2: 'GB',
        iso3: 'GBR',
        numericCode: '826',
        region: 'Europe',
        subregion: 'Northern Europe',
        slug: 'united-kingdom',
        capital: 'London',
        flag: {
            emoji: '🇬🇧',
            png: "https://flagcdn.com/w320/gb.png",
            svg: "https://flagcdn.com/gb.svg",
            alt: "The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew."
        },
        about: 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country in north-western Europe, off the north-western coast of the European mainland.',
        phone: '+44',
        currency: {
            GBP: {
                symbol: '£',
                name: 'British Pound'
            }
        }
    },

    // Oceania
    {
        name: 'Australia',
        iso2: 'AU',
        iso3: 'AUS',
        numericCode: '036',
        region: 'Oceania',
        subregion: 'Australia and New Zealand',
        slug: 'australia',
        capital: 'Canberra',
        flag: {
            emoji: '🇦🇺',
            png: "https://flagcdn.com/w320/au.png",
            svg: "https://flagcdn.com/au.svg",
            alt: "The flag of Australia has a dark blue field with the flag of the United Kingdom in the canton, and six white stars — a large seven-pointed star at the center below the canton and five smaller seven-pointed stars to its right forming the Southern Cross constellation."
        },
        about: 'Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.',
        phone: '+61',
        currency: {
            AUD: {
                symbol: '$',
                name: 'Australian Dollar'
            }
        }
    },
    {
        name: 'New Zealand',
        iso2: 'NZ',
        iso3: 'NZL',
        numericCode: '554',
        region: 'Oceania',
        subregion: 'Australia and New Zealand',
        slug: 'new-zealand',
        capital: 'Wellington',
        flag: {
            emoji: '🇳🇿',
            png: "https://flagcdn.com/w320/nz.png",
            svg: "https://flagcdn.com/nz.svg",
            alt: "The flag of New Zealand has a dark blue field with the flag of the United Kingdom in the canton and four five-pointed red stars with white borders, forming the Southern Cross constellation, on the fly side."
        },
        about: 'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island—and over 700 smaller islands.',
        phone: '+64',
        currency: {
            NZD: {
                symbol: '$',
                name: 'New Zealand Dollar'
            }
        }
    },
    {
        name: 'Fiji',
        iso2: 'FJ',
        iso3: 'FJI',
        numericCode: '242',
        region: 'Oceania',
        subregion: 'Melanesia',
        slug: 'fiji',
        capital: 'Suva',
        flag: {
            emoji: '🇫🇯',
            png: "https://flagcdn.com/w320/fj.png",
            svg: "https://flagcdn.com/fj.svg",
            alt: "The flag of Fiji has a light blue field. It features the flag of the United Kingdom in the canton and the shield from the national coat of arms centered in the fly."
        },
        about: 'Fiji, officially the Republic of Fiji, is an island country in Melanesia, part of Oceania in the South Pacific Ocean. It consists of an archipelago of more than 330 islands.',
        phone: '+679',
        currency: {
            FJD: {
                symbol: '$',
                name: 'Fijian Dollar'
            }
        }
    }
];
