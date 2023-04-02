import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.232743, -59.315902],
  elevation: 30,
  frequencies: [],
  identifiers: { local: "HCO" },
  name: "Chenaut / El Capricho",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.2 },
  runways: [],
});
