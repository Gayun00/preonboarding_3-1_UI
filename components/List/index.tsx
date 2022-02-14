import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BackButton from "../BackButton";
import * as S from "./styled";

function List({ brandId }) {
  const [id, setId] = useState(0);
  const [brand, setBrand] = useState({});
  const [products, setProducts] = useState([]);
  async function fetchProductList(categoryId = 1) {
    const res = await axios.get(
      `https://api2.ncnc.app/con-category1s/67/nested`
    );
    // setCategoryId(res.data.qas);
    const brands = res.data.conCategory1.conCategory2s;
    console.log(brands);
    const selectedBrand = brands.filter((brand) => {
      return brand.id === 147;
    });
    console.log(brands);
    setBrand(selectedBrand);
  }
  useEffect(() => {
    console.log(brand[0]?.conItems);
  }, [brand]);

  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <S.Wrapper>
      <S.Header>
        <BackButton />
        <S.Title>스타벅스</S.Title>
      </S.Header>
      <S.ProductCounter>
        <S.ProductCount>00개의 상품</S.ProductCount>
      </S.ProductCounter>
      <S.ProductList>
        {brand[0]?.conItems?.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </S.ProductList>
    </S.Wrapper>
  );
}

export default List;
