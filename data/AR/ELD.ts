import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-26.3969444444444, -54.5747222222222],
  elevation: 209,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { icao: "SATD", local: "ELD", iata: "ELO" },
  name: "Aeroclub Alto Paraná El Dorado",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
