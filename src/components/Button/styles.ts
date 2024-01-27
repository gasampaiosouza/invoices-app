import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px 8px 8px;

  font-size: 15px;
  letter-spacing: -0.25px;
  min-width: 150px;

  border: 0;
  border-radius: ${({ theme }) => theme.border.radius};

  color: ${({ theme }) => theme.color.primary.contrastText};
  background: ${({ theme }) => theme.color.primary.main};

  transition: background 0.2s;

  &::before {
    content: url("data:image/svg+xml,%3Csvg width='10' height='11' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71h2.58Z' fill='%237C5DFA'/%3E%3C/svg%3E");
    color: ${({ theme }) => theme.color.primary.main};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    background: #fff;
    border-radius: 100%;

    margin-right: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primary.hover};
  }
`;
