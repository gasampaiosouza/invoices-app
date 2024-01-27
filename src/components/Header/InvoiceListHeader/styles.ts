import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 77px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.font.large};
`;

export const Total = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const FilterByStatus = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text.primary};
  letter-spacing: -0.25px;
`;
