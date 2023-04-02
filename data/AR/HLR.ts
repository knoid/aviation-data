import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.270449, -58.900427],
  elevation: 6,
  frequencies: [],
  identifiers: { local: "HLR" },
  name: "Los Cardales / La Reserva",
  radio_helpers: [],
  reference: { direction: "NE", distance: 5.4 },
  runways: [],
});
