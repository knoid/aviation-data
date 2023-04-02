import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.27226, -60.57066],
  elevation: 44,
  frequencies: [],
  identifiers: { local: "ACB" },
  name: "Coronel Bogado / Agroservicios",
  radio_helpers: [],
  reference: { direction: "NE", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
