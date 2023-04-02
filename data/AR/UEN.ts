import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.4255255194023, -58.371482081574],
  elevation: 15,
  frequencies: [],
  identifiers: { local: "UEN" },
  name: "Quequén / Moromar",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 17 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
