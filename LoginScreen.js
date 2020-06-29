import React from "react";
import { ScrollView } from 'react-native';
import {Image,StyleSheet,TouchableOpacity,View,Text,TextInput,FlatList } from 'react-native';
import icon from "../json/icon.json"


// Make a component
const LoginScreen = ({ navigation }) => {
    return (
      <View style={{flex: 1,backgroundColor:"#F9D9A6" }}>
   
            <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={{uri:icon.arrow}}
                            style={styles.back}/>
                </TouchableOpacity>
            <Text>登入頁預留</Text>
      </View>
    );
}
const styles = StyleSheet.create({

    back:{
        width: 36,
        height: 36,
        marginTop:30,
        marginLeft:5,
    },
   
});
export default LoginScreen;
