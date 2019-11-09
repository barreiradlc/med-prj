import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './telas/Home'
import Medicamentos from './telas/Medicamentos'
import Agendamentos from './telas/Agendamentos'
import Bulas from './telas/Bulas'

import PraticasIntegrativas from './telas/PraticasIntegrativas'
import Vacinacoes from './telas/Vacinacoes'
import MedicamentosLista from './telas/MedicamentosLista'
import GruposDeApoio from './telas/GruposDeApoio'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: Home, 
    navigationOptions: {
      title: 'Home'
    },
  },
  Bulas:{
    screen: Bulas, 
    navigationOptions: {
      title: 'Bulas'
    },
  },
  Agendamentos: {
    screen: Agendamentos, 
    navigationOptions: {
      title: 'Agendamentos'
    }
  },
  Medicamentos:{
    screen: Medicamentos, 
    navigationOptions: {
      title: 'Medicamentos'
    },
  },
  // disponibilidade
  PraticasIntegrativas:{
    screen: PraticasIntegrativas, 
    navigationOptions: {
      title: 'PraticasIntegrativas'
    },
  },
  MedicamentosLista:{
    screen: MedicamentosLista, 
    navigationOptions: {
      title: 'MedicamentosLista'
    },
  },
  GruposDeApoio:{
    screen: GruposDeApoio, 
    navigationOptions: {
      title: 'GruposDeApoio'
    },
  },
  Vacinacoes:{
    screen: Vacinacoes, 
    navigationOptions: {
      title: 'Vacinacoes'
    },
  },
});

export default createAppContainer(RootStack);