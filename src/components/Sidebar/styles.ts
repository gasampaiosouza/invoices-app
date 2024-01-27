import styled from 'styled-components';
import LogoComponent from '../../../assets/logo.svg?react';

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  width: 103px;
  height: 100%;

  background: #373b53;
  border-radius: 0 20px 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  position: relative;

  width: 103px;
  height: 103px;

  border-radius: 0 20px 20px 0;
  background: ${({ theme }) => theme.color.primary.main};

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 0;

    border-radius: 20px 0 20px 0;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.color.primary.hover};
  }
`;

export const Logo = styled(LogoComponent)`
  z-index: 1;
`;
