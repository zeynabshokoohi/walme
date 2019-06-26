import React,{Component} from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { ReceiveData } from "../../actions";
import { fetchPrice } from "../../actions";


 class ItemDetails extends Component {


    componentDidMount(){
       
       // this.props.ReceiveData();
       this.props.fetchPrice();
    }

    
    renderList(){
        
        return this.props.pricings.map(pricing => {
            return (
                <div className="ItemDetailsContainer" key={pricing.id}>
                <img className="ImgContainer"  width={100}
                    height={100} src={pricing.img}  alt="thumbnail"/>
                  <div className="TextContainer">
                   <div className="title">{pricing.item_name}</div>
                   <div className="price">${pricing.price}</div>
                   <div className="quantity">Qty:{pricing.quantity}</div>
                 </div>
           </div>
            );
         } );
    }
      
    render (){
        return(
            
            <div className="list">
               {this.renderList()}
          </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {pricings : state.pricings}
}

export default connect(mapStateToProps,{fetchPrice})(ItemDetails);



