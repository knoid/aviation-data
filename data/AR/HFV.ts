import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "public",
  controlled: false,
  coordinates: [-34.916875, -58.250221],
  elevation: 25,
  frequencies: [],
  identifiers: { local: "HFV" },
  name: "Florencio Varela / Colonia la Capilla",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 4.9 },
  runways: [],
});
