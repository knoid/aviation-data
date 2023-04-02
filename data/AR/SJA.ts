import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.6030555555556, -68.5472222222222],
  elevation: 634,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "SJA" },
  name: "San Juan / Aeroclub",
  radio_helpers: [],
  reference: { direction: "S", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
