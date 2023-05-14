export const _author_date_split = (str) => {
  return str?.split(" ")[0];
};

export const _category_join = (str) => {
  return str?.split("_").join(" ");
};

export const _date_formater = (date) => {
  // input date in "YYYY-MM-DD" format
  let inputDate = date;

  // create a new Date object by parsing the input date string
  let dateObj = new Date(inputDate);

  // get the month name from the date object's toLocaleString method
  let monthName = dateObj.toLocaleString("default", { month: "long" });

  // get the day value (1-31) from the date object
  let day = dateObj.getDate();

  // get the year value (e.g. 2023) from the date object
  let year = dateObj.getFullYear();

  // combine the month name, day, and year into the desired format
  return `${monthName} ${day}, ${year}`;
};
