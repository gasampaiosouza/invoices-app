import styled from 'styled-components';
import THEME from '../../styles/theme';

const INVOICE_STATUS = {
  paid: THEME.color.success.main,
  pending: THEME.color.pending.main,
  draft: THEME.color.tertiary.main,
};

export const Container = styled.main`
  width: 730px;
  margin: 0 auto;
`;

// invoices
export const InvoiceListContainer = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Invoice = styled.div`
  cursor: pointer;

  padding: 30px 24px 30px 32px;
  border-radius: 8px;

  background: ${({ theme }) => theme.color.white};

  display: grid;
  grid-template-columns: 100px 150px 185px 100px 130px 50px;
  align-items: center;
  justify-items: start;

  /* display: flex;
  align-items: center;
  justify-content: space-between; */

  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
`;

export const InvoiceID = styled.label`
  font-size: 15px;
  font-weight: 700;

  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.color.text.primary};

  &::before {
    content: '#';

    color: ${({ theme }) => theme.color.text.tertiary};
  }
`;

export const InvoiceDate = styled.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;

  text-transform: capitalize;

  color: ${({ theme }) => theme.color.text.secondary};

  &::before {
    content: 'Due ';

    color: ${({ theme }) => theme.color.text.tertiary};
  }
`;

export const InvoiceName = styled.h2`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;

  color: #858bb2;
`;

export const InvoiceValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.color.text.primary};
`;

type InvoiceStatusProps = {
  status: keyof typeof INVOICE_STATUS;
};

export const InvoiceStatus = styled.span<InvoiceStatusProps>`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.25px;

  color: ${({ status }) => INVOICE_STATUS[status]};
  background: ${({ status }) => INVOICE_STATUS[status]}0D;

  width: 104px;
  height: 40px;
  border-radius: 6px;

  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';

    display: inline-block;
    width: 8px;
    height: 8px;

    margin-right: 8px;
    border-radius: 50%;

    background: ${({ status }) => INVOICE_STATUS[status]};
  }
`;
