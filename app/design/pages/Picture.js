import React, {Component} from 'react'
import {Text, ScrollView, Image, ImageBackground, View, FlatList} from 'react-native'
import {Container, Content, Row, Col, Footer, FooterTab, Grid,
		Icon, Button} from 'native-base'
import Gestures from 'react-native-easy-gestures';
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

import {allPicture} from '../actions'

class Picture extends Component{
	constructor (){
  super()
  this.state={
   menu_now:'',
   picture:'',
   pict_styles:[],
   isSelected:false
  }
}
  componentDidMount(){
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
								{this.state.isSelected ? (
                <Gestures
                    style={{height:300,width:200}}
                        scalable={{
                            min: 0.1,
                            max: 7,
                    }}
                    onChange={(event, styles) => {
                        this.setState({pict_styles:styles})
                        console.log(this.state.pict_styles);
                    }}>
                    
                    <Image source = {{uri:this.state.picture}} style={{height:300,width:200}}/>
                 </Gestures>):(<Button bordered light success style={{width:'45%',height:'auto',marginTop:'25%'}}>
                            	<Text style={{margin:10,color:'black',textAlign:'center'}}>SILAKAN PILIH GAMBAR YANG ANDA INGINKAN</Text>
                        	    </Button>
            )}
                      
							</Col>
							<Col size={1}>
								<Row size={75}></Row>
								<Row size={25} style={{flexDirection:'column',justifyContent:'flex-end'}}>
									<Button style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
			                          <Icon name='create'/>
			                        </Button>
			                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}}>
			                          <Icon name='add'/>
			                        </Button>
			                        <Button success style={{marginBottom:5,backgroundColor:'#075E54',opacity:0.7}} onPress={()=>this.setState({isSelected:false,picture:''})}>
			                          <Icon name='trash'/>
			                        </Button>
								</Row>
							</Col>
						</Grid>
						<Row style={{backgroundColor:'gray',height:100,opacity:0.8,padding:10}}>
							<ScrollView horizontal>
								<FlatList
									horizontal={true}
									data={this.props.picture.pictures}
									renderItem={({item})=>
										<Button transparent onPress={()=>this.setState({isSelected:true,picture:item.path})} key={item.id} style={{height:'auto',width:'auto',marginRight:10}}>
											<Image source={{uri:item.path}} style={{width:100,height:100}}/>
										</Button>
									}
									
								/>
							</ScrollView>
						</Row>		
					</ImageBackground>
				</Row>
				<Row size={1} >
					<FooterTab style={{backgroundColor:'#34495e'}}>
						<Button transparent vertical style={{marginRight:10,marginBottom:5}}>
		                   	<Text style={{color:'#fff',fontWeight:'bold'}}>Gambar</Text>
		                </Button>
		                <Button transparent vertical style={{marginRight:10,marginBottom:5}} >
		                   	<Text style={{color:'#fff',fontWeight:'bold'}}>Gradasi</Text>
		                </Button>
		                <Button transparent vertical style={{marginRight:10,marginBottom:5}} >
		                   	<Text style={{color:'#fff',fontWeight:'bold'}}>Warna</Text>
		                </Button>
					</FooterTab>
				</Row>
			</Container>
			)
	}
}

const mapStateToProps = (state) => {
	return{
		picture: state.menuReducer
	}
}
export default connect(mapStateToProps)(Picture)