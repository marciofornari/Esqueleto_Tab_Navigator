import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Pagina = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function InternaScreen() {
  return (
    <Pagina>
      <Text>Esta Página não aparece nas TABS :) </Text>
    </Pagina>
  );
}

export default InternaScreen;