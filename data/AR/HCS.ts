import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.307048, -59.170276],
  elevation: 25,
  frequencies: [],
  identifiers: { local: "HCS" },
  name: "Capilla del Señor / Las Araucarias",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.5 },
  runways: [],
});
