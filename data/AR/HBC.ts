import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "public",
  controlled: false,
  coordinates: [-34.64073, -58.409441],
  elevation: 6,
  frequencies: [],
  identifiers: { local: "HBC" },
  name: "Buenos Aires / B. Churruca",
  radio_helpers: [],
  reference: { direction: "W", distance: 0 },
  runways: [],
});
