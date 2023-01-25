import { Container } from "./app.styles";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SalesByDate from "./components/SalesByDate";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Filter />
        <SalesByDate />
      </Container>
    </>
  );
}

export default App;
