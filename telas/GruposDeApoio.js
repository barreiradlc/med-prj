import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements';

function GruposDeApoio(){

const list = [
  {
    name: 'Doenças crônicas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '12/nov/2019 Terça-feira 16:30 horas'
  },
  {
    name: 'Saúde mental',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '15/nov/2019 Sexta-feira 12:30 horas'
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


export default GruposDeApoio