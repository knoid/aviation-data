import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.99615, -62.99883],
  elevation: 117,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "GAS" },
  name: "General Villegas",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 2.4 },
  runways: [
    { type: "asphalt", orientations: ["03", "21"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
