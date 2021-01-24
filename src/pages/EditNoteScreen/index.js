import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Texto,
  Botao
} from './styles';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Texto>Tela Editar</Texto>
      <Botao title="Ir para Listar" onPress={() => navigation.navigate('List')} />
    </Container>
  );
}