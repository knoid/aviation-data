import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.27799, -61.55366],
  elevation: 89,
  frequencies: [],
  identifiers: { local: "DOF" },
  name: "Martínez de Hoz / Fumigaciones Ortega",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
