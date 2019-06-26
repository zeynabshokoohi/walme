import React,{Component} from 'react';
import { Row , Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { ReceiveData } from "../../actions";

 class TaxShow extends Component {
    componentDidMount(){
        this.props.ReceiveData();
    }

    renderTaxShow(){
        return this.props.details.map(detail => {
            return (
                <Row className="show-grid">
                  <Col md={6}> Est. taxes & fees </Col>
                  <Col md={6}>${detail.tax}</Col>
                </Row>
            )
        } );
    }


    render (){
        return(
            <div>
               {this.renderTaxShow()}
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {details : state.details}
}


export default connect(mapStateToProps,{ReceiveData})(TaxShow);