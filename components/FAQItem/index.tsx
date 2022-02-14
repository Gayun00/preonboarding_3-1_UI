import React from "react";
import * as S from "./styled";

function FAQItem() {
  const isOpened = false;
  return (
    <S.Wrapper>
      <S.Q>Q.</S.Q>
      <S.Question>실수로 잘못 구매했는데 환불이 가능한가요?</S.Question>
      <S.Button
        src={`images/${isOpened ? "shrink.svg" : "spread.svg"}`}
      ></S.Button>
    </S.Wrapper>
  );
}

export default FAQItem;
