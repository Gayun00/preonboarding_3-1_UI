import axios from "axios";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import FAQItem from "../FAQItem";
import * as S from "./styled";

function CustomerCenter() {
  // async function getStaticProps() {
  //   const res = await axios.get("https://api2.ncnc.app/qa-types");
  //   console.log(res);
  //   return {
  //     props: {
  //       data: res,
  //     },
  //   };
  // }

  // useEffect(() => {
  //   console.log(getStaticProps());
  // }, []);
  interface QaTypes {
    id: number;
    key: string[];
    name: string[];
  }
  const [qaTypes, setQaTypes] = useState([]);
  async function fetchFAQTypes() {
    const res = await axios.get("https://api2.ncnc.app/qa-types");
    setQaTypes(res.data.qaTypes);
  }

  useEffect(() => {
    fetchFAQTypes();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.PageTitle>고객센터</S.PageTitle>
      </S.Header>
      <S.Info>
        <p>상담시간 안내</p>
        <p>평일 10:00 ~ 18: 00</p>
        <p>점심시간 12:30 ~ 13:30 /토, 일 공휴일 휴무</p>
      </S.Info>
      <S.FAQTitleWrapper>
        <S.FAQTitle>자주 묻는 질문</S.FAQTitle>
        <S.FAQButtonWrapper>
          {qaTypes.map((qaType) => (
            <S.FAQButton key={qaType.id}>{qaType.name}</S.FAQButton>
          ))}
        </S.FAQButtonWrapper>
      </S.FAQTitleWrapper>
      <S.FAQList>
        <FAQItem />
      </S.FAQList>
    </S.Wrapper>
  );
}

export default CustomerCenter;
