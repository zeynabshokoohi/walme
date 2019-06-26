import React, { Component } from 'react';
// import Tooltip from "../ToolTip/ToolTip";
import ReactTooltip from 'react-tooltip'
import {connect} from 'react-redux';
import { ReceiveData } from "../../actions";
import { Row, Col, OverlayTriggr} from 'react-bootstrap';

// var styles = {
//     pickupSavings: {
//       textDecoration: 'underline'
//     },
//     totalSavings: {
//       color: 'red',
//       fontWeight: 800
//     }
//   };

 class PickupSavings extends Component {

  componentDidMount(){
    this.props.ReceiveData ();
  }

  renderPickupSavingsPrice(){
        return this.props.details.map(detail => {
            return (
                <Row className="show-grid">
                     <ReactTooltip place="bottom" type="dark" effect="float"/>  
                  <Col md={6}> 
                      <p data-tip="Pick up your order from store helps cut costs,
                      and we pass the savings on to you." > Pickup Savings </p>
                   </Col>
                  <Col md={6}>${detail.savings}</Col>
                </Row>
            )
        } );
    }


    render() {


       return (
        <div>
            {this.renderPickupSavingsPrice()}
        </div>
       );
    }

}



const mapStateToProps = (state) => {
    return {details : state.details}
}



export default connect(mapStateToProps,{ReceiveData})(PickupSavings);