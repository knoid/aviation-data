import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.195, -69.6097222222222],
  elevation: 870,
  frequencies: [],
  identifiers: { local: "BRQ" },
  name: "Buta Ranquil / El Portón",
  radio_helpers: [],
  reference: { direction: "SE", distance: 12 },
  runways: [
    { type: "asphalt", orientations: ["10", "28"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
