import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.6436, -59.12727],
  elevation: 32,
  frequencies: [],
  identifiers: { local: "LVM" },
  name: "Luján / Ea. Villa María",
  radio_helpers: [],
  reference: { direction: "S", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
