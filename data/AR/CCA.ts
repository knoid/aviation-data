import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.7725, -57.9827777777778],
  elevation: 70,
  frequencies: [],
  identifiers: { icao: "SATU", local: "CCA", iata: "UZU" },
  name: "Curuzú Cuatiá",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 2.2 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
