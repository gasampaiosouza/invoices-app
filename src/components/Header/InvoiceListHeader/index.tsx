import Button from '../../Button';
import {
  Container,
  FilterByStatus,
  StatusContainer,
  Title,
  TitleContainer,
  Total,
} from './styles';

const InvoiceListHeader = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Invoices</Title>
        <Total>There are 7 total invoices</Total>
      </TitleContainer>

      <StatusContainer>
        <FilterByStatus>Filter by status</FilterByStatus>
        <Button>New Invoice</Button>
      </StatusContainer>
    </Container>
  );
};

export default InvoiceListHeader;
