import { combineReducers } from "redux";
import pricing from "./pricing";
import tax from "./tax";
import checkPromo from "./checkPromo";
import {reducer as formReducer} from "redux-form"


const detailsReducer = () => {

    return [
      { 
        "id":1, 
        "subtotal": 102.96,
        "savings": 3.85, 
        "tax": 8.92,
        "total": 108.03,
        "zip": 85050,
        "item_name":  "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
        "quantity": 1,
        "img":
          "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        "price": 102.96,
        "term" : ''
      }
    ];
};

const checkedPormotionReducer = (checkedPormotion = null, action) => {

    if (action.type === 'PROMOTION_CHECKED') {
      return action.payload;
    }
  
    return checkedPormotion;
  };





export default combineReducers({
   checkPromos : checkPromo,
   pricings : pricing,
   form : formReducer,
   details : detailsReducer,
   checkedPormotion :  checkedPormotionReducer
});





