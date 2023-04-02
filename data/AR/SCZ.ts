import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-50.0177777777778, -68.5802777777778],
  elevation: 111,
  frequencies: [],
  identifiers: { icao: "SAWU", local: "SCZ", iata: "RZA" },
  name: "Santa Cruz",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
