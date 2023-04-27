const resetData = (...rest) => {
  rest.map((r) => {
    r("");
  });
};

export default resetData;
