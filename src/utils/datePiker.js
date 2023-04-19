const date = new Date(); // generate new date
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};

// export this date
export default date.toLocaleDateString("en-US", options);
