import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.2344444444444, -57.0238888888889],
  elevation: 10,
  frequencies: [{ type: "TWR", frequency: 119 }],
  identifiers: { icao: "SAZV", local: "GES", iata: "VLG" },
  name: "Villa Gesell",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.6 },
  runways: [{ type: "asphalt", orientations: ["11", "29"] }],
});
