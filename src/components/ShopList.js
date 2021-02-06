import React from "react";
import './ShoppingList.css'

const ShopList = ({ data, handleClick }) => {
  return (
    <div className="card-list">
      {data.map(({ src, title, price, id, cart }) => {
        return (
          <div key={id} className="card columns my-2 p-3">
            <div>
              <img src={src} alt={title} />
            </div>
            <div className="column" style={{ marginLeft: "auto" }}>
              <h3 className="sub-title">{title}</h3>
              <div style={{ display: "flex" }}>
                <span style={{ flex: "1" }} className="subtitle">
                  {price} Rs
                </span>
                <button
                  onClick={() => handleClick(id)}
                  className="button is-danger is-active"
                >
                  {cart === false ? "Add to Cart" : "In Cart"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopList;
