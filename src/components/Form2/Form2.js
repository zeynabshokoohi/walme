import React from 'react';
import { Field, reduxForm} from 'redux-form';

class Form2 extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }


    renderInput = ({ input,label , meta }) => {

        console.log("meta is " + meta ); 
        //    <input
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
        // />
        //        
    return (
         <div className="field">
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
         </div>
    
         );
    }
  

     onSubmit(formValues) {
        //  console.log(formValues);
         
     }

    render() {

        
    // console.log(this.props);

        return( 
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title"  component ={this.renderInput} label="Enter title"/>
               

                <button className="ui button primary">Apply</button>
            </form>   
        );

    }
}


const validate = (formValues) => {

    const errors = {};

    if (!formValues.title) {
        // only ran if the user didnt enter a code
        errors.title = 'You must enter a title';
      }

      return errors;
}


export default reduxForm({
    form: 'form2',
    validate
  })(Form2);