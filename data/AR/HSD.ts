import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.600466, -58.840928],
  elevation: 23,
  frequencies: [],
  identifiers: { local: "HSD" },
  name: "Moreno / Country Club San Diego",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4 },
  runways: [],
});
