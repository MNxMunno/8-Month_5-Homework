import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/api/ProductApi";

const Home = () => {
  return (
    <>
      <Product />
    </>
  );
};

export default Home;
