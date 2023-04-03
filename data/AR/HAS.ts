import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-31.7086111111111, -60.5008333333333],
  elevation: 16,
  frequencies: [],
  identifiers: { local: "HAS" },
  name: "Paraná / Amarras del sol",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.2 },
  runways: [],
});
