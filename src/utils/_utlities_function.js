export const _author_date_split = (str) => {
  return str?.split(" ")[0];
};

export const _category_join = (str) => {
  return str?.split("_").join(" ");
};
