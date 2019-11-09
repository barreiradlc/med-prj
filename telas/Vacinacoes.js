import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements';

function Vacinacoes(){

const list = [
  {
    name: 'Hepatite B',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '27/12/2019'
  },
  {
    name: 'Febre Amarela',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '21/11/2019'
  },
  {
    name: 'Tríplice Viral',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '23/11/2019'
  },
]

  let search = ''


  return(
    <ScrollView>
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
    </ScrollView>
  )
}


export default Vacinacoes