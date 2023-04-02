import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.0011, -65.36657],
  elevation: 436,
  frequencies: [],
  identifiers: { local: "ERT" },
  name: "Villa Mercedes / Estancia don Roberto",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 20 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
