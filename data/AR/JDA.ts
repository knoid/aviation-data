import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.0325, -55.1980555555556],
  elevation: 205,
  frequencies: [],
  identifiers: { local: "JDA" },
  name: "Jardín de América",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
