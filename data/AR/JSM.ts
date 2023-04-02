import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-44.0472222222222, -70.4463888888889],
  elevation: 734,
  frequencies: [],
  identifiers: { icao: "SAWS", local: "JSM", iata: "JSM" },
  name: "José De san Martín",
  radio_helpers: [],
  runways: [
    { type: "dirt", orientations: ["06", "24"] },
    { type: "dirt", orientations: ["09", "27"] },
  ],
});
