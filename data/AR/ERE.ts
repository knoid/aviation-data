import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.87161, -61.92696],
  elevation: 87,
  frequencies: [],
  identifiers: { icao: "SANW", local: "ERE", iata: "CRR" },
  name: "Ceres",
  radio_helpers: [{ type: "VOR/DME", frequency: 115.5 }],
  reference: { direction: "NE", distance: 0.38 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
