export default {
  get_busses_number: {
    times: ["08:30", "09:00", "09:30", "10:00"],
    next_bus: "8:30",
  },
  post_busses_number: {
    message: "bus saved, you will receive updates on timings",
  },
  get_busses_place: {
    busses: ["23", "22"],
  },
  post_bus: {
    bus_number: 23,
    country: "England",
    county: "Gloucestershire",
  },
  remote_busses: [
    {
      bus_number: 23,
      county: "Gloucestershire",
      times: ["08:30", "09:00", "09:30", "10:00"],
      country: "England",
    },
    {
      bus_number: 22,
      county: "Gloucestershire",
      times: ["08:30", "09:00", "09:30", "10:00"],
      country: "England",
    },
    {
      bus_number: 24,
      county: "Gloucestershire",
      times: ["08:30", "09:00", "09:30", "10:00"],
      country: "England",
    },
    {
      bus_number: 31,
      county: "Gloucestershire",
      times: ["08:30", "09:00", "09:30", "10:00"],
      country: "England",
    },
    {
      bus_number: 30,
      county: "Gloucestershire",
      times: ["08:30", "09:00", "09:30", "10:00"],
      country: "England",
    },
  ],
}
