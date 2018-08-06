import React, {Component} from 'react'
import {Text, View, Image, ImageBackground,ScrollView, Modal, TextInput} from 'react-native'
import {Container, Col, Row, Button, Footer, FooterTab, Grid, Icon} from 'native-base'
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'
import Gestures from 'react-native-easy-gestures';

export default class Font extends Component{
	constructor (){
  super()
  this.state={
   menu_now:'',
   text:'',
   modalVisible:false,
   isSelected:false
  }
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
          <Text style={{color:'#075E54',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> HURUF</Text>
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
          backgroundColor: '#34495e',
          height:50
        },
    };
  };
	render(){
		return(
			<Container>
				<Row size={8}>
					<ImageBackground source={require('./model.jpg')} style={{width:'100%',height:'100%'}}>
						<Grid>
							<Col size={1}>
								<Row size={75}></Row>
								<Row size={25} style={{flexDirection:'column',justifyContent:'flex-end'}}>
									<Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
			                          <Icon name='person'/>
			                        </Button>
			                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
			                          <Icon name='create'/>
			                        </Button>
			                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
			                          <Icon name='grid'/>
			                        </Button>
								</Row>
							</Col>
							<Col size={5} style={{flexDirection:'row',justifyContent:'center',marginTop:'25%'}}>
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
							</Col>
							<Col size={1}>
								<Row size={75}></Row>
								<Row size={25} style={{flexDirection:'column',justifyContent:'flex-end'}}>
									<Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
			                          <Icon name='create'/>
			                        </Button>
			                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}} onPress={()=>this.setModalVisible(true)}>
			                          <Icon name='add'/>
			                        </Button>
			                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}} onPress={()=>this.setState({isSelected:false,text:''})}>
			                          <Icon name='trash'/>
			                        </Button>
								</Row>
							</Col>
						</Grid>
					</ImageBackground>
				</Row>
				<Row size={1} >
					<FooterTab style={{backgroundColor:'#34495e'}}>
						<Button transparent vertical style={{marginRight:10,marginBottom:5}} >
		                   	<Text style={{color:'#fff', fontWeight:'bold'}}>Font</Text>
		                </Button>
		                <Button transparent vertical style={{marginRight:10,marginBottom:5}} >
		                   	<Text style={{color:'#fff', fontWeight:'bold'}}>Warna</Text>
		                </Button>
		                <Button transparent vertical style={{marginRight:10,marginBottom:5}} >
		                   	<Text style={{color:'#fff', fontWeight:'bold'}}>Properti</Text>
		                </Button>
					</FooterTab>
				</Row>
				<Modal
		          animationType="slide"
		          transparent={true}
		          visible={this.state.modalVisible}
		          onRequestClose={() => {
		            alert('Modal has been closed.');
		          }}>
		          	<Row size={8}>
		          		<TextInput
			              style={{borderColor: 'gray',backgroundColor:'black',opacity:0.9,flex:1, fontSize:25,color:'#fff',fontWeight:'bold'}}
			              onChangeText={(text) => this.setState({text})}
			              editable = {true}
			              multiline = {true}
			              maxLength = {40}
			              value={this.state.text}
			             />
		          	</Row>
		          	
		          		 <Footer style={{backgroundColor:'grey', paddingLeft:10,flexDirection:'column',justifyContent:'flex-start'}}>
				           	<Row size={1}>
				           		<Col size={3}>
				           	 		<Row style={{backgroundColor:'grey', paddingLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
				           	 			<Icon name="list" style={{color:'#fff'}}/>
							            <Icon name="menu" style={{color:'#fff'}}/>
							            <Icon name="funnel" style={{color:'#fff'}}/>
				           	 		</Row>
					        	</Col>
					        	<Col size={1} style={{backgroundColor:'green',marginLeft:20}}>
					           	<Button transparent
					                style={{width:'100%', padding:5}}
					                onPress={() => {
					                  this.setModalVisible(!this.state.modalVisible);
					                }}>
					                <Text center style={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>SIMPAN</Text>
					            </Button>
					            </Col>
					         </Row>
				        </Footer>
		         
		          </Modal>
			</Container>
			)
	}
}