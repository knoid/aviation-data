import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-33.0055555555556, -58.6127777777778],
  elevation: 23,
  frequencies: [{ type: "TWR", frequency: 118.4 }],
  identifiers: { icao: "SAAG", local: "GUA", iata: "GHU" },
  name: "Gualeguaychú",
  radio_helpers: [{ type: "VOR/DME", frequency: 113.2 }],
  reference: { direction: "W", distance: 4.3 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
