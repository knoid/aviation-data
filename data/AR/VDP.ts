import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.82, -58.67277778],
  frequencies: [],
  identifiers: { local: "VDP" },
  name: "Virrey del Pino (vdp)",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
