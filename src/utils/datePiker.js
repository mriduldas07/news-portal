// const date = new Date(); // generate new date
const optionsForHeader = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};

const optionsForRelatedNews = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

const optionsForLatestNews = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

// export this date
export const dateForHeader = new Date().toLocaleDateString(
  "en-US",
  optionsForHeader
);

export const dateForRelatedNews = new Date().toLocaleDateString(
  "en-US",
  optionsForRelatedNews
);

export const dateForLatestNews = new Date().toLocaleDateString(
  "en-US",
  optionsForLatestNews
);
