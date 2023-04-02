import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-39.4558333333333, -62.675],
  elevation: 27,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "URO" },
  name: "Pedro Luro",
  radio_helpers: [],
  reference: { direction: "N", distance: 2.2 },
  runways: [
    { type: "dirt", orientations: ["08", "26"] },
    { type: "asphalt", orientations: ["16", "34"] },
  ],
});
