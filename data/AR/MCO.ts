import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-40.81596, -68.07203],
  elevation: 784,
  frequencies: [],
  identifiers: { local: "MCO" },
  name: "Los Menucos",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
