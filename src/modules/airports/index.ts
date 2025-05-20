import fs from "fs";
import csvParser from "csv-parser";
import type { Airport } from "./types";

export function getAirports(): Promise<Airport[]> {
    const airports: Airport[] = [];

    return new Promise((resolve) => {
        fs.createReadStream(__dirname + "/data.csv")
            .pipe(csvParser({ separator: "," }))
            .on("data", (data: Airport) => {
                if (data.type === "airport") {
                    airports.push(data);
                }
            })
            .on("end", () => resolve(airports));
    });
}

export type {Airport};
    