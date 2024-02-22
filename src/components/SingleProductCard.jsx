import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const SingleProductCard = ({ product }) => {
  const baseUrl = "http://localhost:8000";
  const path = product.img[0];
  const userData = useSelector((state) => {
    return state.user.userData;
  });
  const user_id = useSelector((state) => {
    return state.user.user_id;
  });
  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/users/add?type=cart&ph=${userData.phone}&id=${product._id}`
      );
      // `${urlbase}/users/add?type=cart&ph=${user.phone}&id=${_id}&size=${size}`
      console.log(response);

      if (response.status === 200) {
        console.log("Item added to cart successfully:", response.data);
        // You can update your state or perform any other actions here
      } else {
        console.error("Failed to add item to cart:", response.data);
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle error scenario
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <img width="420px" height="auto" src={path} alt={product.title} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span style={{}}>{product.title.toUpperCase()}</span>
        <span style={{ color: "red" }}>
          {" "}
          {product.price[0]}{" "}
          {product.price[1] !== 0 && (
            <s style={{ color: "red" }}>{product.price[1]}</s>
          )}
        </span>
      </div>
      <Button
        onClick={handleAddToCart}
        variant="contained"
        sx={{ backgroundColor: "black" }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default SingleProductCard;
