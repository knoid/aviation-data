import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.85694, -60.70038],
  elevation: 74,
  frequencies: [],
  identifiers: { local: "PEN" },
  name: "Pergamino / La Noria",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 5.9 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
