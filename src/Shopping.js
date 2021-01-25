import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar";

const Shopping = () => {
  return (
    <div>
      <Navbar title="Shop" />
      <Grid container>
        <Grid item>
          <img src="https://images-eu.ssl-images-amazon.com/images/I/71anKhv48FL._AC_UL160_SR160,160_.jpg" alt="" />
        </Grid>
        <Grid item>
          <Typography>Name</Typography>
          <Typography>Price</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shopping;
