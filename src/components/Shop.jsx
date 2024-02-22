import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../assets/Shop.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import SingleProductCard from "./SingleProductCard";

const Shop = ({ baseUrl, productData, setProductData }) => {
  const handelFilter = async (e) => {
    const temp = productData;
    const term = e.target.innerHTML;
    const { data } = await axios.get(
      `${baseUrl}/products/filter?filter=${term}`
    );
    setProductData(data.length > 0 ? data : temp);
  };

  const [category, setCategory] = useState("");

  const handlecategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const [price, setPrice] = useState("");

  const handlePriceRange = (event) => {
    setPrice(event.target.value);
  };
  const [sorting, setsorting] = useState("");
  const handleSorting = () => {};
  return (
    <div className="Shop-main">
      <h1>SHOP</h1>
      {productData.length > 0 ? (
        <>
          <div className="filter-bar">
            <div className="categories">
              <span
                onClick={() => {
                  axios
                    .get(`${baseUrl}/api/products`)
                    .then((res) => setProductData(res.data))
                    .catch((err) => console.log(err));
                }}
              >
                All
              </span>
              <span onClick={handelFilter}>Women</span>
              <span onClick={handelFilter}>Men</span>
              <span onClick={handelFilter}>Kids</span>
              <span onClick={handelFilter}>Corporate</span>
              <span onClick={handelFilter}>Birthday</span>
              <span onClick={handelFilter}>Anniversery</span>
            </div>
            <div className="sorting">
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small-label">Price</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={price}
                  label="Price Range"
                  onChange={handlePriceRange}
                >
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/products`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value="None"
                  >
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/prodcuts/price?range=500`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"500"}
                  >
                    {" "}
                    Under 500
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/prodcuts/price?range=1000`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"1000"}
                  >
                    {" "}
                    Under 1000
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/prodcuts/price?range=2000`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"2000"}
                  >
                    {" "}
                    Under 2000
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small-label">Sort</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={sorting}
                  label="Sorting"
                  onChange={handleSorting}
                >
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/products`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"None"}
                  >
                    {" "}
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/products/sort?sortType=asce`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"Ascending"}
                  >
                    {" "}
                    Price Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${baseUrl}/api/products/sort?sortType=tyiie`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"Descending"}
                  >
                    {" "}
                    Price High to Low
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="container-shop">
            {productData.map((product) => (
              <Link
                to={`/product/singleProduct/${product._id}`}
                key={product._id}
              >
                <div className="shop-item">
                  <SingleProductCard product={product} />
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <h1>
          <LoadingButton />
        </h1>
      )}
    </div>
  );
};

export default Shop;
