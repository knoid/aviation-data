import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.69132, -62.06369],
  elevation: 112,
  frequencies: [],
  identifiers: { local: "VTO" },
  name: "Venado Tuerto / La Siesta",
  radio_helpers: [],
  reference: { direction: "NW", distance: 6.5 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
