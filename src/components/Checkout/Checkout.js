import React from 'react';
import {Row} from 'react-bootstrap';
import SubTotal from '../Subtotal/subtotal';
import PromoForm  from '../Form/Form';
import Form2  from '../Form2/Form2';
import Promo from '../Promo/Promo';
import ItemDetails from '../ItemDetails/ItemDetails';
import TaxShow from '../Tax/Tax';
import Expander from "../Expander/Expander";
import BasicForm from '../BasicForm/BasicForm';
import PickupSaving from '../PickupSavings/PickupSavings';
import { tryPromo } from "../../actions";
import { ReceiveData } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm} from 'redux-form';




class Checkout extends React.Component {

    constructor(props) {
        super(props);
      }


    onPromoSubmit(term){
        console.log(term);
       
    }

    renderPromo = discountInDollars => {
        return (
          <div>
            <h2 className="alignLeft">Discount</h2>
            <h2 className="Savings">-${discountInDollars}</h2>
          </div>
        );
      };


    render (){
        // console.log( "this props are : " + this.props)
       // const { subtotal, savings, tax, zip, total, discount } = this.props.pricing;

        let discountInDollars = 0;
        if (this.props.details.discount !== 0) {
               discountInDollars = (this.props.details.subtotal / this.props.details.discount).toFixed(2);
        }

     return (
        <div className="container"> 
        <div className="purchase-card">
           <div>
                  <h2 className="alignLeft"> Subtotal </h2>
                 
                      <h2 className="alignRight"> ${this.props.details.subtotal } </h2>
                 <SubTotal />
           </div>  
            <div>
               <PickupSaving />
           </div>
           <div>
               <TaxShow />
           </div>
           <hr />
           <div>
           <Expander showText="See Item Details" hideText="Hide Item Details">
               <ItemDetails />
           </Expander>
           </div> 
           <hr />
           <div>
           <Expander showText="Apply Promo CODE" hideText="Hide Item Details">

               {/* <BasicForm onSubmit={this.onPromoSubmit}/> */}
               {/* <PromoForm /> */}
               <Form2 />
            </Expander>
           </div>
        </div>
       
 
     </div>
     );
    }

}


const mapStateToProps = (state) => {
    return {details : state.details}
}
  
export default connect(mapStateToProps,{ReceiveData})(Checkout);

