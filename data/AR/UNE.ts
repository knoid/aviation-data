import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.88841, -60.8436],
  elevation: 35,
  frequencies: [],
  identifiers: { local: "UNE" },
  name: "Funes / Alagro Fumigaciones",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
