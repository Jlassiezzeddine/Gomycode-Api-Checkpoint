export const filterByTerm = (searchTerm) => {
  return { type: "FILTERBYTERM", payload: { searchTerm } };
};
