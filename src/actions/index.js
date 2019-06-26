// Action Creator( we have three action creators)

import dataApi from '../apis/dataApi';
import codeApi from '../apis/codeApi';



export const ReceiveData = (data) => {

    // Return an action

    return {
       type: 'DATA_RECIEVED',
       payload: data
    };
};


// action for check "DISCOUNT" word
export const CheckPromotion = (term) => {

  // Return an action

  return {
     type: 'PROMOTION_CHECKED',
     payload: term
  };
};



// // fetch items
// export const fetchItems =  () => async dispatch => {
//         const response = await dataApi.get('./db1.json')
//          dispatch({type:'FETCH_ITEMS' , payload: response.data})
//     };


// fetch price
export const fetchPrice = (id) => async dispatch =>{
    const response = await dataApi.get('./db1.json')
    dispatch({type:'FETCH_PRICE' , payload: response.data})
}

// fetch taxes
export const fetchTax = (id) => async dispatch =>{
  const response = await dataApi.get('./db2.json')
  dispatch({type:'FETCH_TAX' , payload: response.data})
}

// action creator for fetch form values from redux-form
export const getValue = formValues => async dispatch => {
    //codes is the word in db.js
      codeApi.post('/codes', formValues);
      
    };
 

// action for fetch "DISCOUNT" word
export const tryPromo= (term) => {
    return {
      type: 'TRY_PROMO',
      term: term,
     // payload: formValues
    };
  }
  
