import React,{Component} from 'react'
import {Text,View,Image, ImageBackground,ScrollView} from 'react-native'
import {Button,Footer, FooterTab, Left, Right, Icon} from 'native-base'
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

import {allMenu} from '../actions'

 class Home extends Component{
  constructor (){
  super()
  this.state={
   menu_now:'',
   text:'',
   picture:''
  }
}
  componentDidMount(){
    this.props.dispatch(allMenu())
  }
          static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <View>
        <Button transparent onPress={() => navigation.goBack()} style={{height:50}}>
        <Icon name='arrow-back' style={{color:'#FFF'}}/>
         </Button>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#075E54',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> CREATE</Text>
          </View>
        </View>
        ),
      headerRight:(
        <View>
            <View>
                <Text style={{color:'#FFF',fontSize:15,paddingRight:10,fontWeight:'bold'}}> NEXT</Text>
            </View>
        </View>
        ),
      headerStyle: {
          backgroundColor: 'grey',
          height:50
        },
    };
  };
     render(){
        console.log(this.props.menu.results)
        return(
            <View  style={{flex:1,flexDirection:'column'}}>
                
                <View style={{flex:1}}>
                  <ImageBackground source={require('./model.jpg')} style={{width:'100%',height:'100%'}}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:'45%'}}>
                      <Button bordered light success style={{padding:10,width:'45%',height:'auto'}}>
                        <Text style={{color:'black',textAlign:'center'}}>SILAKAN PILIH MENU UNTUK MENAMBAHKAN ITEM</Text>
                      </Button>
                    </View>
                    <View style={{backgroundColor:'transparent',height:'30%',marginTop:'30%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                          <Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='person'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='create'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='grid'/>
                        </Button>
                        </View>
                        <View>
                          <Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='person'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='create'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='trash'/>
                        </Button>
                        </View>
                    </View>
                  </ImageBackground>
                </View>
  
                <Footer style={{backgroundColor:'grey',flexDirection:'row',justifyContent:'flex-start',padding:10,height:70}}>
                  <ScrollView horizontal>
                    <FooterTab style={{backgroundColor:'transparent'}}>
                      {this.props.menu.results.map((item,i)=>{
                        const value=item.value;
                        return(
                            <Button vertical style={{marginRight:10,marginBottom:5}} key={i} onPress={()=>this.props.navigation.navigate(value)}>
                              <Icon name={item.icon} style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={{color:'#fff'}}>{item.name}</Text>
                            </Button>
                          )
                      })}
                      </FooterTab>
                  </ScrollView>
                </Footer>
            </View>
            
        )
    }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menuReducer
  }
}

export default connect(mapStateToProps)(Home);