import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.06029, -63.54799],
  elevation: 268,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "OLV" },
  name: "Oliva",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
