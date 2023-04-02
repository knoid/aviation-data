import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.4463888888889, -60.0886111111111],
  elevation: 89,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MAY" },
  name: "25 De Mayo",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
