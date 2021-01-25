import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import { addUser } from "./features/userSlice";
import Header from "./Header";
import WebCamera from "./WebCamera";
const AddUser = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const defaultState = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };
  const [state, setState] = useState(defaultState);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    dispatch(addUser({ user: values }));
  };

  return (
    <div>
      <Header />
      <Container maxWidth="xs">
        <WebCamera />

        <Form
          style={{ border: "2px solid green" }}
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Cards
                  number={values.number || ""}
                  name={values.name || ""}
                  expiry={values.expiry || ""}
                  cvc={values.cvc || ""}
                  focused={active}
                />
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Field
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={formatCreditCardNumber}
                    className="input"
                  />
                </div>
                <div>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                    className="input"
                  />
                </div>
                <div>
                  <Field
                    name="expiry"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    placeholder="Valid Thru"
                    format={formatExpirationDate}
                    className="input"
                  />
                  <Field
                    name="cvc"
                    component="input"
                    type="text"
                    pattern="\d{3,4}"
                    placeholder="CVC"
                    format={formatCVC}
                    className="input"
                  />
                </div>
                <div className="buttons">
                  <Button
                    type="submit"
                    disabled={submitting}
                    variant="contained"
                    color="primary"
                    style={{ width: "49%", marginRight: "2%" }}
                  >
                    Submit
                  </Button>
                  <Button
                    onClick={form.reset}
                    color="secondary"
                    variant="contained"
                    style={{ width: "49%" }}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            );
          }}
        />
      </Container>
    </div>
  );
};

export default AddUser;
