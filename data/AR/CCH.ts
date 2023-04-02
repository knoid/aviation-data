import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.6698945, -61.405525],
  elevation: 82,
  frequencies: [],
  identifiers: { local: "CCH" },
  name: "Carlos Casares / Haydee",
  radio_helpers: [],
  reference: { direction: "SW", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
