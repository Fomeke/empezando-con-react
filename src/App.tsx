import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Title from "./components/Title";
import Button from "./components/Button";
import ButtonDelete from "./components/ButtonDelete";
import { useState } from "react";

function App() {
  const [elementos, setElementos] = useState([
    "Papas",
    "Zapallo",
    "Sandia",
    "Naranja",
  ]);

  const addMinion = () => setElementos([...elementos, "Minion"]);

  const delMinion = () => setElementos(elementos.slice(0, -1));

  return (
    <>
      <Title title="MiniMarket" desc="Ventas online" />

      <Card>
        <CardBody title="Frutas y verduras" text="Seleccione con un click" />
        <Button onClick={addMinion}>Agregar</Button>{" "}
        <Button onClick={delMinion}>Eliminar</Button>
        <List data={elementos} />
      </Card>
    </>
  );
}

export default App;
