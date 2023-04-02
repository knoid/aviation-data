import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.8888888888889, -60.2277777777778],
  elevation: 168,
  frequencies: [{ type: "AFIS", frequency: 118.1 }],
  identifiers: { icao: "SAZF", local: "OLA", iata: "OVR" },
  name: "Olavarría",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 5.9 },
  runways: [
    { type: "asphalt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
