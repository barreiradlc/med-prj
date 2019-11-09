import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import React from 'react'

function Agendamentos(){
  let navigationOptions = {
    title: 'Início',
  };

const list = [
  {
    name: 'Carbamazepina 200mg comprimido ',
    avatar_url: 'https://i0.wp.com/www.hisour.com/wp-content/uploads/2018/03/Alabama-crimson-color.jpg?fit=720%2C720&ssl=1',
    subtitle: ''
  },
  {
    name: 'Celecoxibe 200mg cápsula ',
    avatar_url: 'https://imagens.netstore.com.br/lojadopapel/images/p/Azul-Turquesa-Bahamas.jpg?mode=pad&scale=upscalecanvas&format=jpg&quality=90&w=1600&h=1600&404=default',
    subtitle: ''
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