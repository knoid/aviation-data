import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.1022222222222, -59.3738888888889],
  elevation: 13,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "UAE" },
  name: "Gualeguay / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.3 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
