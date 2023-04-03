import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.6791666666667, -58.6436111111111],
  elevation: 29,
  frequencies: [
    { type: "ATIS", frequency: 127.7 },
    { type: "GND", frequency: 121.8 },
    { type: "TWR", frequency: 118.5 },
  ],
  identifiers: { icao: "SADM", local: "MOR" },
  name: "Morón",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
