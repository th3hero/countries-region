import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import type { Airport } from "./types";

export function getAirports(): Promise<Airport[]> {
    const airports: Airport[] = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, "data.csv"))
            .on("error", reject)
            .pipe(csvParser({ separator: "," }))
            .on("error", reject)
            .on("data", (data: Airport) => {
                if (data.type === "airport") {
                    airports.push(data);
                }
            })
            .on("end", () => resolve(airports));
    });
}

export type {Airport};
    