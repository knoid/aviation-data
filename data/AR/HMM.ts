import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.562908, -58.790569],
  elevation: 32,
  frequencies: [],
  identifiers: { local: "HMM" },
  name: "Doctor Mariano Moreno",
  radio_helpers: [],
  reference: { direction: "S", distance: 3.8 },
  runways: [],
});
