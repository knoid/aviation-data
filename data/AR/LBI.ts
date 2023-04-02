import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.18951, -58.7872],
  elevation: 81,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "LBI" },
  name: "Lobería",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.3 },
  runways: [
    { type: "dirt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["12", "30"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
