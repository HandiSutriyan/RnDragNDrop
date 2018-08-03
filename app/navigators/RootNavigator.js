import { StackNavigator } from 'react-navigation';

import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import Home from '../contacts/pages/Home.js'
import Picture from '../contacts/pages/Picture.js'
import Font from '../contacts/pages/Font.js'

const RootNavigator = StackNavigator({
  Home:{
    screen:Home
  },
  Picture: {
    screen: Picture
  },
  Font: {
    screen: Font,
  },
})

export default RootNavigator
