// import 'dayjs/locale/pt-br'; dayjs.locale('de')
import dayjs from 'dayjs';
import { useState } from 'react';

import InvoiceListHeader from '../Header/InvoiceListHeader';
import ArrowRight from '../../../assets/icon-arrow-right.svg?react';

import {
  Container,
  Invoice,
  InvoiceDate,
  InvoiceID,
  InvoiceListContainer,
  InvoiceName,
  InvoiceStatus,
  InvoiceValue,
} from './styles';

import DATA from '../../../data/data.json';
import { InvoiceData } from '../../types/invoice_data';
import { formatPrice } from '../../utils/format_price';

const InvoiceList = () => {
  const [invoices] = useState(DATA as InvoiceData[]);

  return (
    <Container>
      <InvoiceListHeader />

      <InvoiceListContainer>
        {invoices.map((invoice) => (
          <Invoice key={invoice.id}>
            <InvoiceID>{invoice.id}</InvoiceID>
            <InvoiceDate>
              {dayjs(invoice.paymentDue).format('DD MMM YYYY')}
            </InvoiceDate>
            <InvoiceName>{invoice.clientName}</InvoiceName>
            <InvoiceValue>{formatPrice(invoice.total)}</InvoiceValue>
            <InvoiceStatus status={invoice.status}>
              {invoice.status}
            </InvoiceStatus>

            <ArrowRight />
          </Invoice>
        ))}
      </InvoiceListContainer>
    </Container>
  );
};

export default InvoiceList;
