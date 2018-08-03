import React,{Component} from 'react'
import {Text, View, Image, ImageBackground,ScrollView, TouchableHighlight} from 'react-native'
import {Button,Footer,FooterTab, Left, Right, Icon} from 'native-base'
import { NavigationActions } from 'react-navigation'
import Gestures from 'react-native-easy-gestures';
import {connect} from 'react-redux'

import {allPicture} from '../actions'


 class Picture extends Component{
  constructor (){
  super()
  this.state={
   menu_now:'',
   picture:'',
   isSelected:false
  }
}
  componentWillMount(){
    this.props.dispatch(allPicture())
  }
  handleMenu(menu){
    this.setState({menu_now:menu})
  }
          static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <View>
        <Button transparent onPress={() => navigation.navigate('Home')} style={{height:50}}>
        <Icon name='arrow-back' style={{color:'#FFF'}}/>
         </Button>
         </View>
         <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#075E54',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> GAMBAR</Text>
          </View>
        </View>
        ),
      headerRight:(
        <View>
            <View>
               <Button transparent onPress={() => navigation.navigate('Home')} style={{height:50}}>
                <Icon name='checkmark' style={{color:'#FFF',paddingRight:10,fontWeight:'bold'}}/>
              </Button>
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
        console.log(this.props.picture.pictures)
        return(
            <View  style={{flex:1,flexDirection:'column'}}>
                
                <View style={{flex:1}}>
                  <ImageBackground source={require('./model.jpg')} style={{width:'100%',height:'100%'}}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:'15%'}}>
                     
                      {this.state.isSelected ? (
                        <Gestures
                          style={{height:300,width:200}}
                          scalable={{
                            min: 0.1,
                            max: 7,
                          }}
                        >
                           <Image source = {require('./IMG_7430.jpg')} style={{height:300,width:200}}/>
                        </Gestures>
                        ):(
                           <Button bordered light success style={{width:'45%',height:'auto',marginTop:'25%'}}>
                            <Text style={{margin:10,color:'black',textAlign:'center'}}>SILAKAN PILIH GAMBAR YANG ANDA INGINKAN</Text>
                          </Button>
                        )}
                      
                    </View>
                    <View style={{backgroundColor:'transparent',height:'30%', marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                          <Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='person'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='create'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='add'/>
                        </Button>
                        </View>
                        <View>
                          <Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='person'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
                          <Icon name='add'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}} 
                        onPress={()=> this.setState({isSelected:false})}>
                          <Icon name='trash'/>
                        </Button>
                        </View>
                    </View>
                    <View style={{height:'70%',backgroundColor:'gray',opacity:0.5,padding:10}}>
                    {this.props.picture.pictures.map((item,i)=>{
                      console.log(item.path)
                      return(
                          <TouchableHighlight onPress={()=>this.setState({isSelected:true,picture:'./IMG_7430.jpg'})} key={item.id}>
                            <Image source={require('./IMG_7430.jpg')} style={{maxHeight:100,maxWidth:90}}/>
                          </TouchableHighlight>
                        )
                    })}
                    </View>
                  </ImageBackground>
                </View>
  
                <Footer style={{backgroundColor:'grey',flexDirection:'row',justifyContent:'flex-start',height:45}}>
                    <FooterTab style={{backgroundColor:'transparent'}}>
                            <Button style={{marginRight:10,marginBottom:5}} onPress={() => this.handleMenu('Gambar')}>
                              <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Gambar</Text>
                            </Button>
                             <Button style={{marginRight:10,marginBottom:5}} onPress={() => this.handleMenu('Gradasi')}>
                              <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Gradasi</Text>
                            </Button>
                             <Button style={{marginRight:10,marginBottom:5}} onPress={() => this.handleMenu('Warna')}>
                              <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Warna</Text>
                            </Button>
                      </FooterTab>
                </Footer>
            </View>
            
        )
    }
}

const mapStateToProps = (state) => {
  return {
    picture: state.menuReducer
  }
}

export default connect(mapStateToProps)(Picture);