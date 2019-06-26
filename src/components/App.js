import React from 'react';
import {Row} from 'react-bootstrap';
// import SubTotal from './Subtotal/subtotal';
// import PromoForm  from './Form/Form';
// import ItemDetails from './ItemDetails/ItemDetails';
// import Expander from "./Expander/Expander";
// import PickupSaving from './PickupSavings/PickupSavings';

import Checkout from "./Checkout/Checkout";
import './App.css';




const App = () => {

    return(

      <div className="AppContainer">
      <div className="WebContentContainer" />
      <div className="CheckoutContainer">
        <Checkout />
      </div>
    </div>

    );
};

export default App;