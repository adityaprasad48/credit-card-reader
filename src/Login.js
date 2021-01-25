import { Box, Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const [loginState, setLoginState] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("go to addUser Page");
    if (loginState.username === "root" && loginState.password === "root") {
      history.push("/addUser");
    }
  };
  const handleChange = (e) => {
    console.log("hi");
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };
  return (
    <Box
      style={{
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Paper style={{ padding: "40px" }}>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              placeholder="username"
              variant="outlined"
              name="username"
              onChange={handleChange}
              value={loginState.username}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              placeholder="password"
              variant="outlined"
              name="password"
              onChange={handleChange}
              value={loginState.password}
            />
          </div>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Add User
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default Login;
