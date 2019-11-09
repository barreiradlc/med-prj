import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import { Text,TouchableOpacity } from 'react-native';


// or any pure javascript modules available in npm
import { Card, List } from 'react-native-paper';

// import { Med } from './Telas/Med'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Início',
  };

  _onPressButton = () => {
    // alert('press');
  };
  
  _onPressButtonMed = () => {
    this.props.navigation.navigate('Medicamentos')
  };

  _onPressButtonAg = () => {
    this.props.navigation.navigate('Agendamentos')
  };

  _onPressButtonBulas = () => {
    this.props.navigation.navigate('Bulas')
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
                onPress={this._onPressButtonMed}>
                <Icon
                  reverse
                  name="medkit"
                  type="font-awesome"
                  color={ico.c}
                  size={ico.w}
                />
                <Text style={styles.legenda}>Disponibilidade</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButtonBulas}>
                <Icon
                  reverse
                  name="book"
                  type="font-awesome"
                  color={ico.c}
                  size={ico.w}
                />
                <Text style={styles.legenda}>Bulas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.dash}>
      
          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButtonAg}>
                <Icon
                size={ico.w}
                  reverse
                  name="clock-o"
                  type="font-awesome"
                  color={ico.c}
                />
                <Text style={styles.legenda}>Agendamentos</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dashItem}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButton}>
                <Icon
                  reverse
                  name="handshake-o"
                  type="font-awesome"
                  
                  color={ico.c}
                  size={ico.w}
                />
                <Text style={styles.legenda}>Voluntário</Text>
              </TouchableOpacity>
            </View>
          </View>
      
        </View>

        

        

      </View>

      <View >
      
          <View >
            <View style={{padding:10}}>
              <TouchableOpacity
                style={styles.central}
                onPress={this._onPressButton}>
                <Icon
                  reverse
                  name="gears"
                  type="font-awesome"
                  color={ico.c}
                  size={ico.w}
                />
                <View style={styles.legenda}>
                  <Text style={styles.legenda}>Configurações</Text>
                </View>
              </TouchableOpacity>
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
