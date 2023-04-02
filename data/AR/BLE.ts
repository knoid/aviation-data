import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.5594444444444, -58.6661111111111],
  elevation: 139,
  frequencies: [],
  identifiers: { local: "BLE" },
  name: "Balcarce / Ea. la Estrella",
  radio_helpers: [],
  reference: { direction: "N", distance: 29 },
  runways: [{ type: "asphalt", orientations: ["05", "23"] }],
});
