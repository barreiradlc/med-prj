import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements';



function Bulas(){
  let navigationOptions = {
    title: 'Início',
  };


const list = [
  {
    name: 'Carbamazepina 200mg comprimido',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '90.071'
  },
  {
    name: 'Carbamazepina 100mg/5ml suspensão oral',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '90.072'
  },
  {
    name: 'Carbonato de lítio 300mg comprimido',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '11.096'
  },
  {
    name: 'Celecoxibe 200mg cápsula',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '17.860'
  },
  {
    name: 'Clomipramina 25mg comprimido ou drágea',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '90.102'
  },
  {
    name: 'Clomipramina 75mg comprimido de liberação lenta',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '90.333'
  },
]

  let search = ''


  return(
    <View>
      <SearchBar
        placeholder="Faça sua pesquisa..."
        onChangeText={this.updateSearch}
        lightTheme
        value={search}
      />

      {
        list.map((l, i) => (
          <ListItem
            key={i}

            // leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          />
        ))
      }
    </View>
  )
}


export default Bulas