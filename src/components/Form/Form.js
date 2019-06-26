import React from "react";
import { tryPromo } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import {getValue} from "../../actions" // action creator for get form value



class PromoForm extends React.Component {


 
    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }


    renderInput = ({ input, label, meta }) =>  {

        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

          return(
              <div className={className}>
                  <label>{label}</label>
                  <input { ...input} autoComplete="off"/>
                  {this.renderError(meta)}
              </div>
          ); 
    }

 

 onSubmit= formValues => {
  // const lock = formValues.code ;
   console.log(" formValues  Is : " +  formValues);
  // this.props.getValue(formValues);
 };



  render() {

  

    return (
     
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}
         className ="ui form error " 
        >
          <Field name="code" component={this.renderInput} label="Pormo Code :"/>
           <button className="ui button primary"> Apply </button> 
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {

    const errors = {};

    if (!formValues.code) {
        // only ran if the user didnt enter a code
        errors.code = 'You must enter a code';
      }

      return errors;
}






// Decorate with redux-form

// PromoForm = reduxForm({
//   form: 'promoForm', // a unique identifier for this form
//   validate
// })(PromoForm)

// // Decorate with connect to read form values
// const selector = formValueSelector('PromoForm') // <-- same as form name
// PromoForm = connect(formValues => {

//     // can select values individually
//     const { code } = selector(formValues.code, 'code')
//     return {
//       fullName: `${code || ''} `
//     }
//   })(PromoForm)

//   export default PromoForm



export default reduxForm({
  form: 'promoForm',
  validate
})(PromoForm);


