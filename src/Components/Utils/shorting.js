const sortPricesLowToHigh = (initialPrices) => {
  return [...initialPrices].sort(
    (a, b) =>
      a.restaurant.average_cost_for_two - b.restaurant.average_cost_for_two
  );
};

const sortPricesHighToLow = (initialPrices) => {
  return [...initialPrices].sort(
    (a, b) =>
      b.restaurant.average_cost_for_two - a.restaurant.average_cost_for_two
  );
};
const sortByRatings = (initialPrices) => {
  return [...initialPrices].sort(
    (a, b) =>
      b.restaurant.user_rating.aggregate_rating -
      a.restaurant.user_rating.aggregate_rating
  );
};

export { sortPricesLowToHigh, sortPricesHighToLow, sortByRatings };
