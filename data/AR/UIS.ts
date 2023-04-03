import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-33.2722222222222, -66.3566666666667],
  elevation: 710,
  frequencies: [
    { type: "APP", frequency: 118.4 },
    { type: "TWR", frequency: 118.4 },
  ],
  identifiers: { icao: "SAOU", local: "UIS", iata: "LUQ" },
  name: "San Luis / Brig. My D. César R. Ojeda",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.1 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
