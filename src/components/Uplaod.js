import React, { useState } from "react";
import Aditya from "./Aditya.jpg";
import "./Upload.css";

const Uplaod = (props) => {
  const [value, setValue] = useState(false);
  return (
    <form className="upload">
      <div className="field">
        <div className="label">Name</div>
        <div className="control">
          <input type="text" className="input" placeholder="Name" />
        </div>
      </div>

      <div className="label">Choose a profile picture:</div>

      <input
        type="file"
        id="avatar"
        className="input"
        name="avatar"
        accept="image/png, image/jpeg"
        onClick={() => setTimeout(() => setValue(!value), 4000)}
      ></input>
      {value && <img src={Aditya} alt={"img"} />}
      <div className="control">
        <button className="button is-primary my-2">Submit</button>
      </div>
    </form>
  );
};

export default Uplaod;
