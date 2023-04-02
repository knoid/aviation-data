import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.9758861111111, -70.1134638888889],
  elevation: 1048,
  frequencies: [{ type: "COM", frequency: 123.4 }],
  identifiers: { icao: "SAHZ", local: "ZAP", iata: "APZ" },
  name: "Zapala",
  radio_helpers: [],
  reference: { direction: "SW", distance: 4 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
