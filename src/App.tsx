import { Container } from './styles/app_styles';

import InvoiceList from './components/InvoiceList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container>
      <Sidebar />
      <InvoiceList />
    </Container>
  );
}

export default App;
