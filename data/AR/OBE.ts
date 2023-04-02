import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.5181, -55.12421],
  elevation: 343,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { icao: "SATO", local: "OBE" },
  name: "Oberá",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.6 },
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
