import { Container } from "./app.styles";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Filter />
      </Container>
    </>
  );
}

export default App;
