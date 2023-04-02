import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.40164, -64.61351],
  elevation: 277,
  frequencies: [],
  identifiers: { local: "ACH" },
  name: "General Acha",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [{ type: "asphalt", orientations: ["04", "22"] }],
});
