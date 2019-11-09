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
    avatar_url: 'https://i0.wp.com/www.hisour.com/wp-content/uploads/2018/03/Alabama-crimson-color.jpg?fit=720%2C720&ssl=1',
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
            leftAvatar={{ source: { uri: l.avatar_url } }}
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