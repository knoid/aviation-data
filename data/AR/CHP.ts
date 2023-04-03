import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-40.0752777777778, -71.1372222222222],
  elevation: 783,
  frequencies: [
    { type: "APP", frequency: 119.6 },
    { type: "GND", frequency: 121.7 },
    { type: "TWR", frequency: 119.6 },
  ],
  identifiers: { icao: "SAZY", local: "CHP", iata: "CPC" },
  name: "San Martín de los Andes / Aviador C. Campos",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 11 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
