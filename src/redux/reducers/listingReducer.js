export default function listingReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_LISTING":
      return [...state, { ...action.listing }];
    default:
      return state;
  }
}
