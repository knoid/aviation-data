import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.29586, -59.53539],
  elevation: 80,
  frequencies: [],
  identifiers: { local: "PDP" },
  name: "Presidencia Roca / Estancia don Panos",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 8.6 },
  runways: [{ type: "concrete", orientations: ["16", "34"] }],
});
