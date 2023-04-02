import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.2233333333333, -67.4394444444444],
  elevation: 945,
  frequencies: [],
  identifiers: { icao: "SANO", local: "ITO" },
  name: "Chilecito / Brig. My. Juan Facundo Quiroga",
  radio_helpers: [],
  reference: { direction: "SE", distance: 3.9 },
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
