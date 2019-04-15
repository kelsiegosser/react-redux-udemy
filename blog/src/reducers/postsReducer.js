export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

// Alternatively, can use the if statements
// although less common
//
// if (action.type === 'FETCH_POSTS') {
//   return action.payload;
// }
// return state;
