import React,{Component} from 'react'
import {Text, View, Image, ImageBackground,ScrollView, Modal, TextInput} from 'react-native'
import {Button,Footer,FooterTab, Left, Right, Icon} from 'native-base'
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'
import Gestures from 'react-native-easy-gestures';

import {allPicture} from '../actions'


 class Font extends Component{
  constructor (){
  super()
  this.state={
   menu_now:'',
   text:'',
   modalVisible:false,
   isSelected:false
  }
}
  componentWillMount(){
    this.props.dispatch(allPicture())
  }
  handleMenu(menu){
    this.setState({menu_now:menu})
  }
  setModalVisible(visible){
    this.setState({modalVisible:visible})
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
         <View style={{flexDirection:'column',justifyContent:'center'}}>
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
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:'45%'}}>
                      
                      {this.state.text === '' ? (
                          <Button bordered light success style={{padding:10,width:'45%',height:'auto'}}>
                            <Text style={{color:'black',textAlign:'center'}}>SILAKAN TULIS TULISAN YANG AKAN DIPASANG</Text>
                          </Button>
                        ):(
                         <Gestures>
                          <View style={{width:200,height:300}}>
                             <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:20}}>{this.state.text}</Text>
                          </View>
                        </Gestures>
                        )}
                    </View>
                    <View style={{backgroundColor:'transparent',height:'30%',marginTop:'35%',flexDirection:'row',justifyContent:'space-between'}}>
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
                        <Button success 
                        style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}
                        onPress={()=>this.setModalVisible(true)}>
                          <Icon name='add'/>
                        </Button>
                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}
                          onPress={()=>this.setState({text:''})}
                        >
                          <Icon name='trash'/>
                        </Button>
                        </View>
                    </View>
                  </ImageBackground>
                </View>
                <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }} style={{backgroundColor:'black',opacity:0.5}}>
            <View style={{marginTop: 22,flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
            <View style={{flex:1}}>
             <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1,flex:1}}
              onChangeText={(text) => this.setState({text})}
              editable = {true}
              multiline = {true}
              maxLength = {40}
              value={this.state.text}
             />
            </View>
            <Footer style={{backgroundColor:'grey', paddingLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Icon name="list" style={{color:'#fff'}}/>
                <Icon name="menu" style={{color:'#fff'}}/>
                <Icon name="funnel" style={{color:'#fff'}}/>
              <Button success
                style={{maxWidth:200,width:'auto', padding:5}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text center style={{color:'#fff',fontWeight:'bold'}}>SIMPAN</Text>
              </Button>
            </Footer>
          </View>
          </Modal>
                <Footer style={{backgroundColor:'grey',flexDirection:'row',justifyContent:'flex-start',padding:10,height:45}}>
                    <FooterTab style={{backgroundColor:'transparent'}}>
                            <Button style={{marginRight:10,marginBottom:5}} onPress={() => this.handleMenu('Font')}>
                              <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Font</Text>
                            </Button>
                             <Button style={{marginRight:10,marginBottom:5}} onPress={() => this.handleMenu('Warna')}>
                              <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Warna</Text>
                            </Button>
                             <Button style={{marginRight:10,marginBottom:5}} onPress={() => this.handleMenu('Style')}>
                              <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Style</Text>
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

export default connect(mapStateToProps)(Font);