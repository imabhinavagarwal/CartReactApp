import "./style.css";
import React from "react";
import CartItems from "./CartItem.js";
import items from "./data/items";

class Cart extends React.Component {

  state = {
    totalCartPrice: 0
  }

  updateTotalPrice = (priceChange) => {
    this.setState((state) => {
      return { totalCartPrice: (state.totalCartPrice + priceChange) }
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            items.map(
              item =>
                <CartItems
                  key={item.uid}
                  func={this.updateTotalPrice}
                  name={item.name}
                  price={item.price}
                  uid={item.uid} />
            )
          }
        </ul>
        <h2>Cart Total {this.state.totalCartPrice} </h2>
      </div>
    )
  }
}

export default function App() {
  return <Cart />;
}