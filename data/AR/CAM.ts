import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.0244444444444, -64.2794444444445],
  elevation: 545,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CAM" },
  name: "Corralito / Alfonso Mengo",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
