import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.0722222222222, -66.5863888888889],
  elevation: 2324,
  frequencies: [],
  identifiers: { local: "CAL" },
  name: "Campo Arenal",
  radio_helpers: [],
  reference: { direction: "SW", distance: 31 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
