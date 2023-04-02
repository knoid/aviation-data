import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.80974, -67.65938],
  elevation: 347,
  frequencies: [],
  identifiers: { local: "MAO" },
  name: "Veinticinco de Mayo",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 4 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
