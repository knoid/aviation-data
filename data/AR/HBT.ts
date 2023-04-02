import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.9004444444444, -57.9294861111111],
  elevation: 6,
  frequencies: [],
  identifiers: { local: "HBT" },
  name: "La Plata / Helipuerto de Superficie",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.6 },
  runways: [],
});
