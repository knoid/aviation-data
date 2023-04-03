import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.9033333333333, -55.7655555555556],
  elevation: 117,
  frequencies: [{ type: "COM", frequency: 132 }],
  identifiers: { local: "APO" },
  name: "Apóstoles",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.86 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
