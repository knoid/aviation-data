import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-52.608333, -68.127778],
  elevation: 32,
  frequencies: [],
  identifiers: { local: "HEA" },
  name: "Heliplataforma / Am-6",
  radio_helpers: [],
  reference: { direction: "SE", distance: 18 },
  runways: [],
});
