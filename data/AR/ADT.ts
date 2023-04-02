import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-28.85541, -62.26462],
  elevation: 75,
  frequencies: [],
  identifiers: { local: "ADT" },
  name: "Bandera / Agroservicio D.ª Teresa",
  radio_helpers: [],
  reference: { direction: "N", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
