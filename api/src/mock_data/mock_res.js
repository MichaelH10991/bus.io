export default {
  get_busses_number: {
    times: ["08:30", "09:00", "09:30", "10:00"],
    next_bus: "8:30"
  },
  post_busses_number: {
    message: "bus saved, you will receive updates on timings"
  },
  get_busses_place: {
    busses: ["23", "22"]
  },
  post_bus: {
    bus_number: 23,
    country: "England",
    county: "Gloucestershire"
  },
  remote_busses: [
    {
      bus_number: 23,
      times: ["08:30", "09:00", "09:30", "10:00"],
      county: "Gloucestershire",
      counrty: "England"
    },
    {
      bus_number: 22,
      times: ["08:30", "09:00", "09:30", "10:00"],
      county: "Gloucestershire",
      counrty: "England"
    }
  ]
};
