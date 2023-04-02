import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-41.3211111111111, -69.5761111111111],
  elevation: 892,
  frequencies: [{ type: "AFIS", frequency: 122.3 }],
  identifiers: { icao: "SAVJ", local: "IJC", iata: "IGB" },
  name: "Ingeniero Jacobacci / Cabo F.A.A. H. R. Bordón",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 1.3 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
