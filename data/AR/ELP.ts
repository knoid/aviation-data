import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.59712, -64.18672],
  elevation: 178,
  frequencies: [],
  identifiers: { local: "ELP" },
  name: "Club de Planeadores Santa Rosa / Aeródromo el Pampero",
  radio_helpers: [],
  reference: { direction: "NE", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
