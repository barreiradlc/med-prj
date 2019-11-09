import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Icon, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';


// or any pure javascript modules available in npm
import { Card, List } from 'react-native-paper';

// import { Med } from './Telas/Med'

export default class Medicamentos extends React.Component {
  static navigationOptions = {
    title: 'Disponibilidade',
  };

  _onPressButtonMedicamentosLista = () => {
    this.props.navigation.navigate('MedicamentosLista')
  };
  _onPressButtonPraticasIntegrativas = () => {
    this.props.navigation.navigate('PraticasIntegrativas')
  };
  _onPressButtonGruposDeApoio = () => {
    this.props.navigation.navigate('GruposDeApoio')
  };
  _onPressButtonVacinacoes = () => {
    this.props.navigation.navigate('Vacinacoes')
  };
  

  render() {
  
  const ico = {
    w: 50,
    c:'#ff5b4f'
  }

    return (
      <>
      <View style={styles.exterior}>

        <View style={styles.dash}>
      
          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButtonGruposDeApoio}>
                <Icon
                  reverse
                  name="users"
                  type="font-awesome"
                  color={ico.c}
                  size={ico.w}
                />
                <Text style={styles.legenda}>Grupos de apoio</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButtonMedicamentosLista}>
                <Icon
                  reverse
                  name="pill"
                  type="material-community"
                  color={ico.c}
                  size={ico.w}
                />
                <Text style={styles.legenda}>Medicamentos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.dash}>
      
          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButtonVacinacoes}>
                <Icon
                size={ico.w}
                  reverse
                  name="hospital-o"
                  type="font-awesome"
                  color={ico.c}
                />
                <Text style={styles.legenda}>Vacinações</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButtonPraticasIntegrativas}>
                <Icon
                  reverse
                  name="yin-yang"
                  type="material-community"
                  color={ico.c}
                  size={ico.w}
                />
                <Text style={styles.legenda}>Práticas</Text>
                <Text style={styles.legenda}>integrativas</Text>
              </TouchableOpacity>
            </View>
          </View>
      
        </View>

        

        

      </View>

      

      </>
    );
  }
}

const styles = StyleSheet.create({
  exterior:{
    // paddingTop: Constants.statusBarHeight,
    flex:1,
    flexDirection: 'row',
    // backgroundColor:'#555'
  },
  container: {
    // backgroundColor: '#ecf0f1',
    height:'100%',
    marginVertical:5,
    paddingVertical: 5,
  },
  dash: {
    backgroundColor: '#fff',
    flex:1,
  },
  dashItem: {
    flex: 1,
    flexDirection:'column',
    height:'100%',
  },
  central: {
    alignItems: 'stretch',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    
  },
  legenda:{
    textAlign:'center',
    // position:'relative',
    // bottom:15,
    fontSize:20,
    fontWeight:'bold'
  }
});
