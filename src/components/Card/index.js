import React from "react";

import { Container, NumberedButton, Footer, Button } from "./styles";

const Card = () => {
  return (
    <Container>
      <strong>LOTE 15</strong>
      <input type="text" value="1500" />
      <div>
        <div>
          <NumberedButton type="button" radius="left">
            -5
          </NumberedButton>
          <NumberedButton type="button" radius="right">
            +5
          </NumberedButton>
        </div>
        <div>
          <NumberedButton type="button" radius="left">
            -10
          </NumberedButton>
          <NumberedButton type="button" radius="right">
            +10
          </NumberedButton>
        </div>
        <div>
          <NumberedButton type="button" radius="left">
            -20
          </NumberedButton>
          <NumberedButton type="button" radius="right">
            +20
          </NumberedButton>
        </div>
        <div>
          <NumberedButton type="button" radius="all" bgColor="#E0AC5D">
            Zerar
          </NumberedButton>
        </div>
      </div>

      <Footer>
        <Button type="button" bgColor="#64C86E">
          Mostrar lote na tela
        </Button>
        <Button type="button" bgColor="#E74C4C">
          Excluir lote
        </Button>
      </Footer>
    </Container>
  );
};

export default Card;
