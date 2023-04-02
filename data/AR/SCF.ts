import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.17625, -61.20267],
  elevation: 79,
  frequencies: [],
  identifiers: { local: "SCF" },
  name: "Sanford / Casilda Fumigaciones",
  radio_helpers: [],
  reference: { direction: "SE", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
