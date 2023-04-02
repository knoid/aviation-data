import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-42.7591666666667, -65.1027777777778],
  elevation: 130,
  frequencies: [
    { type: "APP", frequency: 119.5 },
    { type: "TWR", frequency: 119.5 },
  ],
  identifiers: { icao: "SAVY", local: "DRY", iata: "PMY" },
  name: "Puerto Madryn / El Tehuelche",
  radio_helpers: [{ type: "VOR/DME", frequency: 116.1 }],
  reference: { direction: "WNW", distance: 2.9 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
