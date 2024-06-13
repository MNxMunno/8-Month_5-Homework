import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/api/ProductApi";
import Model from "../../components/model/Model";

const Home = () => {
  return (
    <>
      <Product />
      {/* <Model>
        <input type="text" name="" id="" />
      </Model> */}
    </>
  );
};

export default Home;
