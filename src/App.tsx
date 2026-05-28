import Card, { CardBody, CardBodyTwo } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Papas", "Zapallo", "Sandia", "Naranja"];
  const list2 = ["Porotos", "Lentejas", "Fideos", "Arroz"];
  return (
    <Card>
      <CardBody title="Frutas y verduras" text="Seleccione con un click" />
      <List data={list} />
      <CardBody title=" " />
      <CardBodyTwo title="Abarrotes" text="Seleccion con un click" />
      <List data={list2} />
    </Card>
  );
}

export default App;
