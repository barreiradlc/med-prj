import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import React from 'react'

function Agendamentos(){
  let navigationOptions = {
    title: 'Início',
  };

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


  return(
    <View>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftIcon={{ name: i.icon }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          />
        ))
      }
    </View>
  )
}


export default Agendamentos