import React, { Component } from 'react';
import CouponButton from '../CouponButton/CouponButton';
import './App.css';

class App extends Component {
  state = {
    numbers: Array(49).fill(false),
  } 

  isCouponFull() {
    let counter = 0
    for (let i = 0; i <= this.state.numbers.length; i++ ){
      if (this.state.numbers[i]) {
        counter++;
      }
    }
    
    if (counter >= 6) {
      return true;
    }

    return false;
  }

  render() {

    return (
      <div className="App">
      {
        this.state.numbers.map((item, index) => {
           let breakLine = null;
           if ((index+1)%7 === 0) {
            breakLine = <br/>
             }              

          return (
            <>
              <CouponButton key={index} number={index+1} disable={this.isCouponFull()} checked={item} onClick={() => {

               this.setState((oldState) => {
                  const numbers = [...oldState.numbers];
                  numbers[index] = !numbers[index];
                  return {
                  numbers
                  };
                })
              }} />
              {breakLine}
              
            </>
          )
        })
        
      }
      
      </div>
    );
  }
}

export default App;

