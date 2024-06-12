import React from "react";
import { useGetProductsQuery } from "../../context/api/ProductApi";

const Product = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 8 });
  console.log(data?.products);

  const card = data?.products?.map((item) => (
    <div className="card" key={item.id}>
      <img width={100} height={100} src={item.images[0]} alt="" />
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Product;
