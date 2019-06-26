import React, { Component } from 'react';
import { tryPromo } from "../../actions";
import { CheckPromotion } from "../../actions";
import { ReceiveData } from "../../actions";
import { connect } from "react-redux";


class BasicForm extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = { term: '' };

  // }

 state = { term: '' };

    onFormSubmit = (event) => {
      event.preventDefault();
    //  this.props.onSubmit(this.state.term);
     
    console.log( this.props.dispatch(tryPromo(this.state.term)));
    };


 

  render (){
        
    // console.log(this.props.checkPromos);
   
   

    return (

        <div> 
          <h2 className="PromoText"> Promo Code </h2>
            <form onSubmit={(event) => this.onFormSubmit(event)}>

               <input
                 type="text"
                 value= {this.state.term}
                 onChange= {(e) => this.setState({ term: e.target.value.toLocaleUpperCase()})}
                 />


               <button className="ApplyButton"> Apply </button>
            </form>
            
        </div>

       )
  }
}

// export default BasicForm;

// export default connect ()(BasicForm);

const mapStateToProps = (state) => {
  // return {details : state.details}
  return {checkPromos : state.checkPromos}
}


// export default connect(mapStateToProps,{ReceiveData})(BasicForm);
export default connect(mapStateToProps,{tryPromo })(BasicForm);