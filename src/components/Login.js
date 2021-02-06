import React, {useState} from "react";
import './Login.css';
const Login = (props) => {

  const [state, setState]= useState({
    username: '',
    password: ''
  })
  

  return (
    <div className="login">
      <form onSubmit={
        (e) => {
          e.preventDefault();
  
        const { username, password } = state;
        const { history } = props;
      
      
        if ((username === 'root' && password === 'root')) {
          history.push('/shop');
        }
      
        if ((username === 'admin' && password === 'admin')) {
          history.push('/admin');
        }
        }
      } action="">
      <div className="field">
        <p className="control">
          <input type="text" className="input" placeholder="Username" 
           onChange={(e) => setState({...state, username: e.target.value})}
           value={state.username}
          />
          
        </p>
      </div>
      <div className="field">
        <p className="control ">
          <input type="text" className="input" placeholder="Password" 
          onChange={(e) => setState({...state, password: e.target.value})}
          value={state.password}
          />
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success">Login</button>
        </p>
    </div>
      </form>
    </div>
  );
};

export default Login;
