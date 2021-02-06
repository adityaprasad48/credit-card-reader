import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import './Payment.scss'

const Payment = ({ value, item = 1, amount = 7999 }) => {
  const [details] = useState({
    num: ' 5430803018192977',
    exp: '02/22',
    cvc: '454',
    name: 'Aditya Prasad'
  })
  const [number, setNumber] = useState(details.num);
  const [name, setName] = useState(details.name);
  const [expiry, setExpiry] = useState(details.exp);
  const [cvc, setCvc] = useState(details.cvc);
  const [value1, setValue1] = useState(false)

  const streamCamVideo = () =>  {
    setTimeout(() => setValue1(!value1), 2000)

    var constraints = { audio: false, video: { width: 100, height: 100 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };

      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  return (
    <div className="payment">
      <div id="container">
          <video autoPlay={true} id="videoElement"></video>
        </div>
        <button onClick={() => streamCamVideo() }>Click</button>
      <div className="card">
        <div className="card-content">
        <h1 className="title mx-6">Quantity: {value ? item : '0'}</h1>
        <h1 className="title mx-6">Amount: {value ? amount : '0'}Rs</h1>
        </div>
      </div>
     { value1 && <Cards number={number} name={name} expiry={expiry} cvc={cvc} />}
      { value1 && <form>
        <input
          className="input"
          type="tel"
          name="number"
          placeholder="Card Number"
          defaultValue={details.num}
          maxLength="16"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={details.name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="tel"
          maxLength="5"
          name="expiry"
          placeholder="MM/YY"
          defaultValue={details.exp}
          onChange={(e) => {
            setExpiry(e.target.value);
            console.log(expiry);
          }}
        />
        <input
          className="input"
          maxLength="3"
          type="tel"
          name="cvc"
          placeholder="CVC"
          defaultValue={details.cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
        <div className="wrap">
          <button className="payment-btn">Pay</button>
        </div>
      </form>}
    </div>
  );
};

export default Payment;
