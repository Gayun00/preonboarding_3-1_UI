import styled from "styled-components";

export const Wrapper = styled.div`
  width: 375px;
  height: 812px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size.blockHeight};
  background-color: ${({ theme }) => theme.color.white};
`;

export const PageTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weightL};
`;

export const Info = styled.section`
  background-color: ${({ theme }) => theme.color.white};
`;

export const FAQTitleWrapper = styled.div`
  margin: 9px 0 9px 0;
  background-color: ${({ theme }) => theme.color.white};
`;

export const FAQTitle = styled.div`
  padding: 16px;
  font: ${({ theme }) => theme.font.sizeL};
`;

export const FAQButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FAQButton = styled.button`
  width: 169px;
  height: 40px;
  color: ${({ theme }) => theme.color.textGray};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.red};
  }
`;

export const ClickedFAQButton = styled.button`
  width: 169px;
  height: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.red};
`;

export const FAQList = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
`;
