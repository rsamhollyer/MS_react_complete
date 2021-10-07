export const sortQuotes = (quotesArr, direction) => {
  const sortCache = {
    asc() {
      return quotesArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    desc() {
      return quotesArr.sort((a, b) => (b.id > a.id ? 1 : -1));
    },
  };

  return sortCache[direction]();
};
