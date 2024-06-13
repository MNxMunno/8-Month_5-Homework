import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../context/api/ProductApi";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Model from "../model/Model";
const API_URL = "http://dummyjson.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let id = searchParams.get("detail");
    if (id) {
      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => setDetailData(res.data));
    }
  }, [searchParams]);

  document.body.style.overflow = detailData ? "hidden" : "auto";

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, { params: { limit: 8 } })
      .then((res) => setData(res.data.products));
  }, []);

  const card = data?.map((item) => (
    <div className="card" key={item.id}>
      <img
        onClick={() => setSearchParams({ detail: item.id })}
        src={item.images[0]}
        alt=""
      />
      <h1>{item.title}</h1>
    </div>
  ));

  const closeDetailModel = () => {
    setDetailData(null);
    setSearchParams({});
  };
  return (
    <section className="product">
      <div className="container">
        <div className="cards">{card}</div>
        {detailData ? (
          <Model close={closeDetailModel}>
            <h1>Detail model</h1>
            <img width={100} height={100} src={detailData.images[0]} alt="" />
          </Model>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Product;
