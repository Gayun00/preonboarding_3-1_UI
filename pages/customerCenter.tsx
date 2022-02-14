import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomerCenter from "../components/CustomerCenter";
import Hamburger from "../components/Hamburger";
import MyPage from "../components/MyPage";

function CustomerCenterPage() {
  const [brands, setBrands] = useState([]);
  const router = useRouter();
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  async function fetchProductList(categoryId = 1) {
    const res = await axios.get(
      `https://api2.ncnc.app/con-category1s/67/nested`
    );
    // setCategoryId(res.data.qas);
    setBrands(res.data.conCategory1.conCategory2s);
    // const selectedBrand = brands.filter((brand) => {
    //   brand.id ===
    // })
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <CustomerCenter />
      {/* <button onClick={onMove}>sdf</button> */}

      <Link href="/list/147">
        <a> list</a>
      </Link>
    </>
  );
}

export default CustomerCenterPage;
