import React from "react";

import { Background, Chroma, Box, FormCard, Button } from "./styles";
import Card from "../Card";

const Container = () => {
  return (
    <Background>
      <Chroma>
        <div>
          <h2>LOTE 15</h2>
          <h1>R$ 1.000,00</h1>
        </div>
      </Chroma>
      <Box>
        <FormCard>
          <form>
            <input placeholder="Digite o nome do lote" />
            <input placeholder="Digite o valor inicial" />
            <Button type="submit">Criar novo lote</Button>
          </form>
        </FormCard>

        <Card />
        <Card />
        <Card />
      </Box>
    </Background>
  );
};

export default Container;
