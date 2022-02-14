import axios, { AxiosResponse } from "axios";
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

  // interface QaTypes {
  //   id: number;
  //   key: string[];
  //   name: string[];
  // }
  const [qaTypes, setQaTypes] = useState([]);
  const [qas, setQas] = useState([]);
  const [clickedType, setClickedType] = useState(1);

  async function fetchFAQTypes() {
    const res = await axios.get("https://api2.ncnc.app/qa-types");
    setQaTypes(res.data.qaTypes);
  }
  async function fetchFAQ(qaTypeId = 1) {
    const res = await axios.get(
      `https://api2.ncnc.app/qas?qaTypeId=${qaTypeId}`
    );
    setQas(res.data.qas);
    console.log(res.data.qas);
  }

  function onClickFAQType(typeId) {
    fetchFAQ(typeId);
    setClickedType(typeId);
  }

  useEffect(() => {
    fetchFAQTypes();
    fetchFAQ();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.PageTitle>고객센터</S.PageTitle>
      </S.Header>
      <S.Info>
        <S.InfoTitle>상담시간 안내</S.InfoTitle>
        <S.InfoText>평일 10:00 ~ 18: 00</S.InfoText>
        <S.InfoText>점심시간 12:30 ~ 13:30 /토, 일 공휴일 휴무</S.InfoText>
      </S.Info>
      <S.FAQTitleWrapper>
        <S.FAQTitle>자주 묻는 질문</S.FAQTitle>
        <S.FAQButtonWrapper>
          {qaTypes.map((qaType) =>
            qaType.id === clickedType ? (
              <S.ClickedFAQButton
                key={qaType.id}
                onClick={() => onClickFAQType(qaType.id)}
              >
                {qaType.name}
              </S.ClickedFAQButton>
            ) : (
              <S.FAQButton
                key={qaType.id}
                onClick={() => onClickFAQType(qaType.id)}
              >
                {qaType.name}
              </S.FAQButton>
            )
          )}
        </S.FAQButtonWrapper>
      </S.FAQTitleWrapper>
      <S.FAQList>
        {qas.map((qa) => (
          <FAQItem key={qa.id} qa={qa.question} aw={qa.answer} />
        ))}
      </S.FAQList>
    </S.Wrapper>
  );
}

export default CustomerCenter;
