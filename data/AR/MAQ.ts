import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-41.24288, -68.70828],
  elevation: 880,
  frequencies: [],
  identifiers: { icao: "SAVQ", local: "MAQ", iata: "MQD" },
  name: "Maquinchao",
  radio_helpers: [],
  reference: { direction: "NE", distance: 0 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
