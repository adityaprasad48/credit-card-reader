import React from "react";
import './Order.css'

const Orders = ({ data, setData }) => {

  const handleClick = (id) => {
    // console.log(data);
    const updatedData = data.find((item) => item.id === id);
    updatedData.cart = !updatedData.cart;
    setData([updatedData, ...data]);
   
  };

  return (
    <div className="orders">
      {
        data && data.map(({title, id, cart}) =>  (
         cart === true && (<div key={id} className="order">
            <p className="order__title">{title}</p>
            <button className="order__btn" onClick={() => handleClick(id)}>Remove</button>
          </div>)
        ))
      }
    </div>
  );
};

export default Orders;
