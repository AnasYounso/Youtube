import React, {Component}  from 'react';
import './CouponButton.css';

class CouponButton extends Component {
    render(){
        let label = this.props.number;
        if (this.props.checked === true) {
            label = 'X'
        }
      
        return(
            <button disabled={this.props.disable} className="CouponButton" onClick={this.props.onClick}>
                {label}
            </button>
         ) 
    }
   }

export default CouponButton;