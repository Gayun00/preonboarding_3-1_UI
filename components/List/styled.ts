import styled from "styled-components";

export const Wrapper = styled.div``;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size.blockHeight};
  background-color: ${({ theme }) => theme.color.white};
`;
export const Title = styled.h1``;
export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.size.blockHeight};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.textGray};
`;
export const ProductCount = styled.p``;
export const ProductList = styled.ul`
  margin-top: ${({ theme }) => theme.margin.m};
  background-color: ${({ theme }) => theme.color.white};
`;
