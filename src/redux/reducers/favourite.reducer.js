export const favouriteReducer = (state = [], action) => {
  const { type, payload } = action;

  console.log(state)
  switch (type) {
    case "ADD_TO_FAVOURITES":
      return [...state, payload];
    case "REMOVE_FAVOURITE": {
      const toRemove = state.findIndex((x) => x.id === payload.id);
      state.splice(toRemove, 1);
      return [...state];
    }
    case "EMPTY":
      return [];
    default:
      return state;
  }
};
