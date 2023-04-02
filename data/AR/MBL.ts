import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.38559, -58.13353],
  elevation: 13,
  frequencies: [],
  identifiers: { local: "MBL" },
  name: "Miramar / Bellamar",
  radio_helpers: [],
  reference: { direction: "SW", distance: 16 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
