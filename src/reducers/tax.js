
export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TAX':
          return action.payload;
      default:
        return state;
    }
  };
  