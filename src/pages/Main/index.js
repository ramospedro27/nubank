import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation
 } from './styles';

export default function main(){
  return (
    <Container> 
      <Header/>
        <Menu/>
        <Content>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponivel</Title>
              <Description>R$ -10.000</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                  Você esta devendo demais
              </Annotation>
            </CardFooter>
          </Card>
        </Content>

      <Tabs />
    </Container>
  )
}