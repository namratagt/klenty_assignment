import React, { useEffect } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import "../assets/itemincart.css";
import { Link } from "react-router-dom";
import axios from "axios";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateUser } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
const IteminCart = ({ item, sum, setSum }) => {
  const baseUrl = "http://localhost:8000";

  const user_id = useSelector((state) => {
    return state.user.user_id;
  });
  const userData = useSelector((state) => {
    return state.user.userData;
  });
  const dispatch = useDispatch();

  useEffect(() => {}, [userData]);
  const handleIncrement = async (e) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/users/update?type=cart&ph=${userData.phone}&id=${item._id}&price=${item.price[0]}`
      );
      console.log("EEEEEEnzcvzvc");
      dispatch(updateUser(response.data));

      console.log(response.data);
      setSum(response.data.sum);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecrement = async (e) => {
    if (item.qty === 1) {
      handleDelete();
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/users/update?type=cart&ph=${userData.phone}&id=${item._id}&price=${item.price[0]}`
      );
      console.log(response.data);
      dispatch(updateUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (e) => {
    try {
      const newUser = await axios.delete(
        `${baseUrl}/api/users/delete?type=cart&ph=${userData.phone}&id=${item._id}&price=${item.price[0]}`
      );
      dispatch(updateUser(newUser.data));

      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="prod-main">
      <div className="prod-image">
        <Link to={`/product/singleProduct/${item.id}`} key={item.id}>
          <img src={item.img} alt="Product" />
        </Link>
      </div>
      <div className="product-details-cart">
        <div className="details-cart">
          <span className="details-cart-item1">
            <strong> {item.title}</strong>
          </span>
          <div className="details-cart-item2"></div>
        </div>
        <div className="btnctn">
          <p className="cart-price">Rs. {item.price[0]}</p>
          {/* <div className="quantity-cart">
            <button onClick={handleDecrement}>
              <RemoveIcon />
            </button>
            <span>{item.qty}</span>

            <button onClick={handleIncrement}>
              <AddIcon />
            </button>
          </div> */}
          <DeleteIcon
            onClick={handleDelete}
            sx={{ alignSelf: "center", fontSize: "2rem", cursor: "pointer" }}
            fontSize="inherit"
          />
        </div>
      </div>
    </div>
  );
};

export default IteminCart;
