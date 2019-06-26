export default ( state=[], action) => {
  switch( action.type){
    case 'TRY_PROMO' :
    if (action.term === "DISCOUNT") {
      return {
        ...state,
        discount: 10
      };
    } else return alert("Invalid Promo Code");
    default :   
      return state;
  }
};

