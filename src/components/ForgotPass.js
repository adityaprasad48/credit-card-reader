import React from "react";


const ForgotPass = () => {
  return (
    <div style={{maxWidth: '500px', margin: '0 auto'}}>
        <div className="field">
          <div className="lablel">Password</div>
          <div className="control">
            <input type="text" className="input"/>
          </div>
        </div>
        <div className="field">
          <div className="lablel">Again Password</div>
          <div className="control">
            <input type="text" className="input"/>
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
    </div>
  );
};

export default ForgotPass;
