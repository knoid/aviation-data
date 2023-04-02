import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-27.49662, -64.93596],
  elevation: 280,
  frequencies: [
    { type: "APP", frequency: 119.85 },
    { type: "TMA", frequency: 123.85 },
    { type: "TWR", frequency: 119.85 },
  ],
  identifiers: { icao: "SANR", local: "TRH", iata: "RHD" },
  name: "Termas de Río Hondo",
  radio_helpers: [
    { type: "GP/DME", frequency: 330.5 },
    { type: "ILS/LOC", frequency: 108.7 },
    { type: "VOR/DME", frequency: 113.7 },
  ],
  reference: { direction: "W", distance: 4 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
