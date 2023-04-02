import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.07849, -60.04602],
  elevation: 43,
  frequencies: [],
  identifiers: { local: "CIF" },
  name: "Arrecifes / Aeroclub",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
