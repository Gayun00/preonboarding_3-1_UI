import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${({ theme }) => theme.size.blockHeight};
`;

export const Q = styled.p`
  color: ${({ theme }) => theme.color.red};
`;

export const Question = styled.h3``;

export const Button = styled.img``;

export const Answer = styled.p``;
