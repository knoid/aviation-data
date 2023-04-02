import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-43.53287, -71.48582],
  elevation: 600,
  frequencies: [],
  identifiers: { local: "VDO" },
  name: "El Corcovado",
  radio_helpers: [],
  runways: [
    { type: "dirt", orientations: ["12", "30"] },
    { type: "asphalt", orientations: ["05", "23"] },
  ],
});
