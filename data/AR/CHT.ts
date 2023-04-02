import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.30629, -61.21041],
  elevation: 92,
  frequencies: [],
  identifiers: { local: "CHT" },
  name: "Charata / El Gringo",
  radio_helpers: [],
  reference: { direction: "S", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
