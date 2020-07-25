import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
const Pagina = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content:center;
`;
const ViewCentro = styled.View`
  align-items:center;
`;
const Texto = styled.Text`
  color:#000;
`;

function TabHomeScreen(props) {
  return (
    <Pagina>
      <ViewCentro>
    <Texto>Tab Home</Texto>
      </ViewCentro>
    </Pagina>
  );
}

export default TabHomeScreen;
