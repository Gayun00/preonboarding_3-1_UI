import React from "react";
import * as S from "./styled";

function MyPage() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.PageTitle>마이페이지</S.PageTitle>
      </S.Header>
      <S.List>
        <S.CustomerService>
          <p>고객센터</p>
          <S.MoveButton></S.MoveButton>
        </S.CustomerService>
      </S.List>
      <S.SpaceArea />
    </S.Wrapper>
  );
}

export default MyPage;
