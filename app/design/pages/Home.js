import React, {Component} from 'react'
import {Text, ScrollView, Image, ImageBackground, View, Sty} from 'react-native'
import {Container, Content, Row, Col, Footer, FooterTab, Grid,
		Icon, Button} from 'native-base'
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

import {allMenu} from '../actions'

class Home extends Component{
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
								<Button bordered light success style={{padding:10,width:'45%',height:'auto'}}>
			                        <Text style={{color:'black',textAlign:'center'}}>SILAKAN PILIH MENU UNTUK MENAMBAHKAN ITEM</Text>
			                      </Button>
							</Col>
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
						</Grid>
					</ImageBackground>
				</Row>
				<Row size={1} >
					<FooterTab style={{backgroundColor:'#34495e'}}>
						<ScrollView horizontal>
							{this.props.menu.results.map((item,i)=>{
		                        const value=item.value;
		                        return(
		                            <Button transparent vertical style={{marginRight:10,marginBottom:5}} key={i} onPress={()=>this.props.navigation.navigate(value)}>
		                              <Icon name={item.icon} style={{textAlign:'center',color:'#FFF'}}/>
		                              <Text style={{color:'#fff'}}>{item.name}</Text>
		                            </Button>
		                          )
		                      })}
						</ScrollView>
					</FooterTab>
				</Row>
			</Container>
			)
	}
} 

const mapStateToProps = (state) => {
	return{
		menu: state.menuReducer
		}
}

export default connect (mapStateToProps)(Home);