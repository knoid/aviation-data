import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.5752777777778, -58.795],
  elevation: 15,
  frequencies: [{ type: "COM", frequency: 118.1 }],
  identifiers: { local: "NPA" },
  name: "Necochea / Pulverizaciones Aerosur",
  radio_helpers: [],
  reference: { direction: "SW", distance: 3 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
