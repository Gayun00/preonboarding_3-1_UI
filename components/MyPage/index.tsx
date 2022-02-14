import React, { useEffect, useRef } from "react";
import * as S from "./styled";

function MyPage({ isSideBarOpened }) {
  console.log(isSideBarOpened);
  const sideBarRef = useRef(null);
  useEffect(() => {
    if (sideBarRef.current) {
      if (isSideBarOpened) {
        console.log("d");
        sideBarRef.current.style.transform = "translateX(0)";
      } else {
        sideBarRef.current.style.transform = "translateX(-100%)";
      }
    }
  }, [isSideBarOpened]);

  return (
    <S.Wrapper ref={sideBarRef}>
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
