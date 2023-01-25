import ReactApexChart from "react-apexcharts";
import { chartOptions } from "./helpers";
import {
  Chart,
  Container,
  Data,
  Period,
  Quantity,
  QuantityDescription,
  QuantityLabel,
  Title,
} from "./styles";

const initialData = [
  {
    x: "2020-01-01",
    y: 54,
  },
  {
    x: "2020-02-01",
    y: 105,
  },
  {
    x: "2020-03-01",
    y: 54,
  },
  {
    x: "2020-04-01",
    y: 99,
  },
];

const SalesByDate = () => {
  return (
    <Container>
      <div>
        <Title>Evolução de vendas</Title>
        <Period>01/01/2017 a 31/01/2017</Period>
      </div>
      <Data>
        <div>
          <Quantity>468.988,00</Quantity>
          <QuantityLabel>Vendas no período</QuantityLabel>
          <QuantityDescription>
            O gráfico mostra as vendas em todas as lojas
          </QuantityDescription>
        </div>
        <Chart>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Vendas", data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </Chart>
      </Data>
    </Container>
  );
};

export default SalesByDate;
