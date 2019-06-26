import React from 'react';
import { connect } from 'react-redux';
import { tryPromo} from '../../actions';
import PromoForm from '../Form/Form';

class Promo extends React.Component {
    
  onSubmit = formValues => {
    this.props.tryPromo(formValues);
  };

  render() {
      // const lock = this.props.form ;
      // console.log("form is correct2" , lock );
      
    return (
      <div>
        <PromoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


const mapStateToProps = state => {
    return { form: state.form };
  };

export default connect(
    mapStateToProps,
  { tryPromo}
)(Promo);