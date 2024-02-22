import React, { useState } from "react";

import IteminCart from "./IteminCart";

import "../assets/cart.css";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";

const Cart = () => {
  const user_id = useSelector((state) => {
    return state.user.user_id;
  });
  const userData = useSelector((state) => {
    return state.user.userData;
  });
  const [nums, setNums] = useState([]);
  const [sum, setSum] = useState(userData.sum);
  const [currPage, setCurrPage] = useState("cart");
  const [activeStep, setActiveStep] = useState(0);
  const baseUrl = "http://localhost:8000";
  useEffect(() => {
    console.log(user_id);
    const res = axios
      .get(`${baseUrl}/api/users/getCartProduct?id=${user_id}`)
      .then((data) => {
        console.log(data.data);
        setNums(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCheckout = () => {
    if (currPage == "cart") {
      setCurrPage("checkout");
      setActiveStep(2);
    } else {
    }
  };

  console.log(nums);
  return (
    <>
      {!userData ? (
        <h1 className="Login-First">
          Please Login First!
          <Link to="/login">
            <Button
              variant="contained"
              sx={{ width: "20%", backgroundColor: "Black" }}
            >
              Login
            </Button>
          </Link>
        </h1>
      ) : (
        <>
          {currPage === "cart" ? (
            <>
              <div className="cart-main">
                {nums.length > 0 ? (
                  <>
                    <div className="product-cart-list">
                      <h2>Bag Details</h2>
                      {nums.map((item) => (
                        <IteminCart item={item} sum={sum} setSum={setSum} />
                      ))}
                    </div>
                    <div className="bill">
                      <div className="bill-details">
                        <h2 className="item-bill">Order Details: </h2>

                        <div className="item-bill">
                          Bag Total: Rs.{userData.sum}
                        </div>
                        <h4 className="item-bill">
                          Grand Total : Rs.{userData.sum}
                        </h4>
                      </div>

                      <Button variant="contained" onClick={handleCheckout}>
                        Check Out
                      </Button>
                    </div>
                  </>
                ) : (
                  <h2>Your Cart is Empty!</h2>
                )}
              </div>
            </>
          ) : (
            <>
              <Checkout
                nums={nums}
                setActiveStep={setActiveStep}
                activeStep={activeStep}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
