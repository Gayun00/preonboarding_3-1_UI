import React from "react";
import * as S from "./styled";

function FAQItem({ qa }) {
  const isOpened = false;
  return (
    <S.Wrapper>
      <S.Q>Q.</S.Q>
      <S.Question>{qa}</S.Question>
      <S.Button
        src={`images/${isOpened ? "shrink.svg" : "spread.svg"}`}
      ></S.Button>
    </S.Wrapper>
  );
}

export default FAQItem;
