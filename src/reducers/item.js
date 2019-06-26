
// export default (state = [], action) => {
//   RECEIVE_DATA
//   switch (action.type) {
//     case RECEIVE_DATA:
//       // let item = {
//       //   item_name: action.itemDetails.item_name,
//       //   quantity: action.itemDetails.quantity,
//       //   img: action.itemDetails.img,
//       //   price: action.itemDetails.price
//       // };
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default ( state=[], action) => {
   switch( action.type){
     case 'FETCH_ITEMS' :
        return action.payload;
     default :   
       return state;
   }
};