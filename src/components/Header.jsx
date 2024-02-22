import React, { useState } from "react";
import "../assets/Header.css";

import { Button, Drawer, List, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import CloseIcon from "@mui/icons-material/Close";
import { Home } from "@mui/icons-material";
const Header = ({ setProductData, productData, baseUrl }) => {
  const [isMenu, setIsMenu] = useState(0);

  const handeleClickAway = () => {
    setIsMenu(0);
    return;
  };
  return (
    <div className="navbar-our">
      <div className="first">
        <Link to="/">
          <img
            src="https://www.svgrepo.com/show/503825/shopping-cart.svg"
            height="70px"
            width="70px"
            alt="VelVet Surprise"
          />
        </Link>
        {isMenu == 1 && (
          <ClickAwayListener
            onClickAway={handeleClickAway}
            disableReactTree={false}
            touchEvent={false}
          >
            <div className="tohide">
              <span>
                <CloseIcon onClick={handeleClickAway} />
              </span>
              <Link to="/">
                <span>HOME</span>
              </Link>
              <Link to="/shop">
                <span>SHOP</span>
              </Link>

              <a target="_blank" href="hjh" rel="noreferrer">
                <span>
                  <InstagramIcon />
                </span>
              </a>
              <Link to="/login">
                <span>
                  <AccountCircleIcon />
                </span>
              </Link>
            </div>
          </ClickAwayListener>
        )}
      </div>
      <div>
        <h1>VelVet Surprise</h1>
      </div>
      <div className="third">
        <Link to="/">
          <Home />
        </Link>

        <Link to="/cart">
          <span>
            <ShoppingCartIcon />
          </span>
        </Link>

        <Link to="/login">
          <span>
            <AccountCircleIcon />
          </span>
        </Link>
      </div>
      <span className="cart-nav">
        <Link to="/cart">
          <ShoppingCartIcon sx={{ color: "black" }} />
        </Link>
      </span>
      <div className="burger">
        <MenuIcon
          onClick={() => setIsMenu(!isMenu)}
          sx={{ fontSize: "35px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Header;
