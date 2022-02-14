import styled from "styled-components";

export const QuestionWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.margin.L};
  height: ${({ theme }) => theme.size.blockHeight};
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Q = styled.p`
  color: ${({ theme }) => theme.color.red};
`;

export const Question = styled.h3`
  margin-left: ${({ theme }) => theme.margin.m};
  line-height: calc(${({ theme }) => theme.font.sizeM}*1.3);
`;

export const Button = styled.img`
  margin-left: 20px;
  cursor: pointer;
`;

export const Answer = styled.p`
  padding: ${({ theme }) => theme.margin.L};
  line-height: calc(${({ theme }) => theme.font.sizeM}*1.3);
  background-color: ${({ theme }) => theme.color.backgroundGray};
`;
