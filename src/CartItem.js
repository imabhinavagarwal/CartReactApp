import React from "react";
import items from "./data/items";

class CartItem extends React.Component {
    
    state = {
      totalPrice: 0,
      count: 0
    }
    
    addToCart = (props) => {
      items.filter(item => item.uid === props.uid).map(item => {
        this.setState((state) => {
          return { totalPrice: (state.totalPrice + item.price), count: (state.count + 1) }
        });
        props.func(item.price);
      })
    }
    
    removeFromCart = (props) => {
      if(this.state.totalPrice){
        items.filter(item => item.uid === props.uid).map(item => {
          this.setState((state) => {
            return { totalPrice: (state.totalPrice - item.price), count: (state.count - 1) }
          });
          props.func(-item.price);
        })
      }
    }
    
    render() {
      return(
        <li>
          <h1> {this.props.name} <small> Rs. {this.props.price}/- </small></h1>
          <button onClick={(e) => this.addToCart(this.props, e)}>Add to cart</button>
          <button onClick={(e) => this.removeFromCart(this.props, e)}>Remove from cart</button>
          <h2>Item Count: {this.state.count} Total: Rs. {this.state.totalPrice}</h2>
        </li>
      )
    }
  }
  
  export default function CartItems(props) {
      return <CartItem uid={props.uid} name={props.name} price={props.price} func={props.func}/>;
  }