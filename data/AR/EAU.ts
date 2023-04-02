import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-54.8227777777778, -68.3041666666667],
  elevation: 6,
  frequencies: [{ type: "TWR", frequency: 118.1 }],
  identifiers: { icao: "SAWO", local: "EAU" },
  name: "Ushuaia / Est. Aeronaval",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.54 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
