import React from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Pagina = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

function TabAboutScreen(props) {
  return (
    <Pagina>
      <Text>Tab Sobre</Text>
      <Button
        title="Vá para Outra Página"
        onPress={() => props.navigation.navigate('InternaScreen')}
      />
    </Pagina>
  );
}

export default TabAboutScreen;
