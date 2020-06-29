import React from "react";
import { ScrollView } from 'react-native';
import { Image,StyleSheet,TouchableOpacity,View,Text,TextInput,FlatList } from 'react-native';
import icon from "../json/icon.json"
import memberlist from "../json/memberlist.json"
import MemberDetail from'../components/MemberDetail';
import LoginScreen from '../screens/LoginScreen'

// Make a component
const SettingsScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
        <View style={styles.headerContentStyle}>
          <View  style={styles.headerLeft}>
              <Image source={{uri:icon.logo}}
               style={{width: 71, height: 30}}/>
          </View>
          <TouchableOpacity style={styles.headerMiddle}>
              <Image source={{uri:icon["mail"] }}
                style={{width: 24, height: 24}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerRight} onPress={() => navigation.push('LoginScreen')}>
                <Image source={{uri:icon["assignment"] }}
                style={{width: 24, height: 24}}/>
          </TouchableOpacity>
       
      </View>
        <ScrollView>
        <TouchableOpacity style={styles.personal}>
        <Image source={{uri:icon["personal"]}} style={{width: 36, height: 36}}/>
        <TextInput style={styles.textname} placeholder="茶蘼" placeholderTextColor="#40230E" />
        </TouchableOpacity>
        <FlatList data={memberlist} 
    renderItem={({item})=> <MemberDetail
    memberlist={item}
    navigation={navigation}
    />}
    keyExtractor={(item,index) => index.toString()}
    />
         
        </ScrollView> 
  </View>
    );
}
const styles = StyleSheet.create({
  headerContentStyle:{
      height: 80 ,
      backgroundColor: "#40230D",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection:"row",
      elevation: 2,
      paddingTop:24
  },
  headerLeft:{
      width: "20%",
      paddingLeft:16,
  },
  headerMiddle:{
      marginLeft:200,
  },
  headerRight:{
      marginLeft:21,
  },
  titleStyle:{
      
      color:"#FFF",
      fontSize:18,
      fontWeight:"bold",
     
  },
  personal:{
      height:53,
      alignItems: "center",
      flexDirection:"row",
      marginLeft:25,
  },
  textname:{
      fontSize:16,
      color:"#40230E",
      fontWeight:"bold",
      marginLeft:7,
  },
});
export default SettingsScreen;
