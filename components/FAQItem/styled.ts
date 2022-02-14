import styled from "styled-components";

export const QuestionWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.size.blockHeight};
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Q = styled.p`
  color: ${({ theme }) => theme.color.red};
`;

export const Question = styled.h3``;

export const Button = styled.img`
  cursor: pointer;
`;

export const Answer = styled.p``;
