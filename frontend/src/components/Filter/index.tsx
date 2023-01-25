import flatpickrLib from "flatpickr";
import { Portuguese } from "flatpickr/dist/l10n/pt";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Container } from "./styles";

flatpickrLib.localize(Portuguese);

const Filter = () => {
  const onChangeData = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <Container>
      <Flatpickr
        options={{ mode: "range", dateFormat: "d/m/Y", showMonths: 2 }}
        className="filter-input"
        onChange={onChangeData}
        placeholder="Selecione um período"
      />

      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </Container>
  );
};

export default Filter;
