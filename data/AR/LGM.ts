import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-45.57506, -69.07713],
  elevation: 27,
  frequencies: [],
  identifiers: { icao: "SAVM", local: "LGM" },
  name: "Sarmiento / Lago Musters",
  radio_helpers: [],
  reference: { direction: "N", distance: 0 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
