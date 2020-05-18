import React, { useState, useCallback } from "react";

import { Container, NumberedButton, Footer, Button } from "./styles";

const Card = ({
  id,
  name,
  value,
  handleDelete,
  handleActive,
  handleActiveValue,
  active,
}) => {
  const [price, setPrice] = useState(value);

  const handleCalc = useCallback(
    (number) => {
      let current = parseFloat(price) + parseFloat(number);

      setPrice(current);
      handleActiveValue(id, current);
    },
    [handleActiveValue, id, price]
  );

  const handleChange = useCallback(
    (number) => {
      let current = parseFloat(number);
      if (isNaN(current)) {
        current = 0;
      }

      setPrice(current);
      handleActiveValue(id, current);
    },
    [handleActiveValue, id]
  );

  return (
    <Container>
      <strong>{name}</strong>
      <input
        type="text"
        value={price}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>
        <div>
          <NumberedButton
            type="button"
            radius="left"
            onClick={() => handleCalc(-5)}
          >
            -5
          </NumberedButton>
          <NumberedButton
            type="button"
            radius="right"
            onClick={() => handleCalc(5)}
          >
            +5
          </NumberedButton>
        </div>
        <div>
          <NumberedButton
            type="button"
            radius="left"
            onClick={() => handleCalc(-10)}
          >
            -10
          </NumberedButton>
          <NumberedButton
            type="button"
            radius="right"
            onClick={() => handleCalc(10)}
          >
            +10
          </NumberedButton>
        </div>
        <div>
          <NumberedButton
            type="button"
            radius="left"
            onClick={() => handleCalc(-20)}
          >
            -20
          </NumberedButton>
          <NumberedButton
            type="button"
            radius="right"
            onClick={() => handleCalc(20)}
          >
            +20
          </NumberedButton>
        </div>
        <div>
          <NumberedButton
            type="button"
            radius="all"
            bgColor="#E0AC5D"
            onClick={() => {
              setPrice(0);
              handleActiveValue(id, 0);
            }}
          >
            Zerar
          </NumberedButton>
        </div>
      </div>

      <Footer>
        <Button
          type="button"
          bgColor={active ? "rgba(100, 200, 110, 0.6)" : "#64C86E"}
          onClick={() => handleActive({ id, name: name, value: price })}
        >
          {active ? "Ativo" : "Mostrar lote na tela"}
        </Button>
        <Button
          type="button"
          bgColor="#E74C4C"
          onClick={() => handleDelete(id)}
        >
          Excluir lote
        </Button>
      </Footer>
    </Container>
  );
};

export default Card;
