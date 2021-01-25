import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core";
import { MenuSharp, ShoppingBasket } from "@material-ui/icons";

import React from "react";

const Navbar = ({ title }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuSharp />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
          <IconButton
            style={{ marginLeft: "auto" }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
            <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
