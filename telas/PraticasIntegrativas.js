import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements';

function PraticasIntegrativas(){

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
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


export default PraticasIntegrativas