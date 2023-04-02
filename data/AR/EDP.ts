import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.54777778, -59.03],
  frequencies: [],
  identifiers: { local: "EDP" },
  name: "Estancia don Pablo (edp)",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["13", "31"] }],
});
