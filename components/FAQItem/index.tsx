import React, { useState } from "react";
import * as S from "./styled";

function FAQItem({ qa }) {
  function onClickButton() {
    setIsOpened(!isOpened);
  }
  const [isOpened, setIsOpened] = useState(false);
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Q>Q.</S.Q>
        <S.Question>{qa}</S.Question>
      </S.TextWrapper>
      <S.Button
        onClick={onClickButton}
        src={`images/${isOpened ? "shrink.svg" : "spread.svg"}`}
      ></S.Button>
    </S.Wrapper>
  );
}

export default FAQItem;
