export interface LocationInterface {
    city: string;
    country: string;
    id: number;
    longitude: number;
    altitude: number;
}
export interface LocationResponse {
    data: {
        id: number;
        wikiDataId: string;
        type: string;
        city: string;
        name: string;
        country: string;
        countryCode: string;
        region: string;
        regionCode: string;
        latitude: number;
        longitude: number;
        population: number;
    }[];
    links: {
        rel: string;
        href: string;
    }[];
    metadata: {
        currentOffset: number;
        totalCount: number;
    };
}
