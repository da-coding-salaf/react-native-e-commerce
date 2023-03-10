import * as React from 'react';
import { View, useWindowDimensions,Text,StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FontAwesome5 } from '@expo/vector-icons';
import Profile from "./Profile"
import Order from "./Order"
import Colors from "./color.js"



const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  1: Profile,
  2: Order
});

export default function PageTabViewer() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  console.log(index)
  const [routes] = React.useState([
    { key: '1', title: 'Profile' },
    { key: '2', title: 'Orders' },
  ]);

  const renderTabBar=(props)=>{
    return(
        <TabBar {...props} 
        indicatorContainerStyle={{
            backgroundColor:"black"
        }}
        labelStyle={{
            fontWeight:"bold",
            fontSize:20
        }}
        activeColor={Colors.white}
        inactiveColor={Colors.main}
        renderLabel={({route, color})=>(
            <Text style={{color, ...style.text}}>{route.title}</Text>
        )}
        indicatorStyle={
            {
                backgroundColor:Colors.main
            }
        }
       
       
        />
    )
  }
  return (
   <View style={{flex:1}}>
     <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
   </View>
  );
}


const style=StyleSheet.create(
    {
        text:{
            fontWeight:"bold"
        },
        tabStyle:{
            backgroundColor:'black'
        }
    }
)