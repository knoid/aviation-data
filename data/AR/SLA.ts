import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.7175, -60.78416667],
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SLA" },
  name: "San Lorenzo / Aeroclub (sla)",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
