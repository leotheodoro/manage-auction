import React, { useState, useCallback } from "react";

import { Background, Chroma, Box, FormCard, Button } from "./styles";
import Card from "../Card";

const Container = () => {
  const [lots, setLots] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [activeLot, setActiveLot] = useState({});

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let id = Date.now();

      if (!name || !value) return;

      setLots([...lots, { id, name: name.toUpperCase(), value }]);
      setName("");
      setValue("");
    },
    [lots, name, value]
  );

  const handleDelete = (id) => {
    setLots(lots.filter((lot) => lot.id !== id));
    if (id === activeLot.id) {
      setActiveLot({});
    }
  };

  const handleActive = (lot) => {
    setActiveLot(lot);
  };

  const handleActiveValue = (id, value) => {
    if (id === activeLot.id) {
      setActiveLot({ ...activeLot, value });
    }
  };

  return (
    <Background>
      <Chroma>
        <div>
          <h2>{activeLot.name}</h2>
          <h1>R$ {activeLot.value}</h1>
        </div>
      </Chroma>
      <Box>
        <FormCard>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Digite o nome do lote"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Digite o valor inicial"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit">Criar novo lote</Button>
          </form>
        </FormCard>

        {lots.map((lot) => (
          <Card
            key={lot.id}
            id={lot.id}
            name={lot.name}
            value={lot.value}
            handleDelete={handleDelete}
            handleActive={handleActive}
            handleActiveValue={handleActiveValue}
            active={activeLot.id === lot.id ? true : false}
          />
        ))}
      </Box>
    </Background>
  );
};

export default Container;
