import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.32006, -63.22654],
  elevation: 202,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAOV", local: "VMR" },
  name: "Villa María / Aeropuerto Regional",
  radio_helpers: [],
  reference: { direction: "N", distance: 4.9 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
