import React,{Component} from 'react';
import { Row , Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { ReceiveData } from "../../actions";

 class SubToltal extends Component {
    componentDidMount(){
        this.props.ReceiveData();
    }

    renderSubtotalPrice(){
        return this.props.details.map(detail => {
            return (
                <Row className="show-grid">
                  <Col md={6}> SubTotal </Col>
                  <Col md={6}>${detail.subtotal}</Col>
                </Row>
            )
        } );
    }


    render (){
        return(
            <div>
               {this.renderSubtotalPrice()}
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {details : state.details}
}


export default connect(mapStateToProps,{ReceiveData })(SubToltal);