import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.4483333333333, -57.4222222222222],
  elevation: 68,
  frequencies: [],
  identifiers: { local: "CII" },
  name: "Corrientes / Ita Ibaté",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
