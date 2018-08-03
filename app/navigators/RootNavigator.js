import { StackNavigator } from 'react-navigation';

import Home from '../design/pages/Home.js'
import Picture from '../design/pages/Picture.js'
import Font from '../design/pages/Font.js'

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
