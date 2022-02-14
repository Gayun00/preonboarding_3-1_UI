import axios from "axios";
import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import CustomerCenter from "../components/CustomerCenter";

function customerCenter() {
  return (
    <>
      <CustomerCenter />
    </>
  );
}

export default customerCenter;
