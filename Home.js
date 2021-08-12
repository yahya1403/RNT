import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView,StyleSheet,TouchableOpacity, Text, View,Image,Button} from 'react-native';
import {SearchBar} from 'react-native-elements'

export default function Home({navigation}) {
    
  return (
    <ScrollView>
    <View style={styles.container}>
          <View style={styles.headerview}>
                  <Image
                style={styles.logo}
                source={{uri:'https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png'}} />
                      <Text style={{ fontSize: 10}}>{new Date().toLocaleString()}</Text>
                  <Image
                style={{height:20,width:20}}
                source={{uri:'https://img.icons8.com/ios/452/search--v1.png'}} />
           </View>
           <View  style={styles.bodyview}>
            <Text style={{ fontSize: 30,paddingBottom:15}}>Breaking News</Text>
                  <View style={styles.content}>
                  <TouchableOpacity activeOpacity = { .5 } onPress={()=>{navigation.navigate('Detail')} }>
                      <Image
                            style={{height:180,width:'auto',borderTopLeftRadius: 20,borderTopRightRadius: 20,}}
                            source={{uri:'https://previews.123rf.com/images/man64/man641509/man64150900008/44761344-passenger-airplane-flying-over-sea.jpg'}} />
                      <Text style={{ fontSize: 18,padding:5,fontWeight:'bold'}}>Indonesia's Sriwijaya Air flight disappears minutes after take-off from Jakarta</Text>
                     </TouchableOpacity>
                            <View style={{flexDirection:'row', alignItems:"baseline"}}>
                            <Image
                              style={styles.logo}
                              source={{uri:'https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png'}} />
                              <Text style={{ fontSize: 15,padding:10}}>John Smith</Text>
                              <Text style={{ fontSize: 10,padding:10}}>{new Date().toLocaleString()}</Text>
                            </View>
                    </View>
           </View>
           <View style={styles.footerview}>
                <View style={{flexDirection:'row'}}>
                <Image
               style={styles.footimg}
               source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-Ex-LJXg9IAAD45NfTW_3km_dmOa8zlD5Q&usqp=CAU'}} />
                    <Text style={{paddingTop:10,paddingLeft:20,paddingRight:30}}><Text style={{ fontSize: 15,fontWeight:'bold'}}>In African Cave, Signs of an Ancient Paint Factory</Text>{"\n"}10,july 2020 {'\u00A0'}10 min read</Text>
                </View>
           </View>
           <View style={styles.footerview}>
                <View style={{flexDirection:'row'}}>
                <Image
               style={styles.footimg}
               source={{uri:'data:image/jpeg;base64,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'}} />
                    <Text style={{paddingTop:10,paddingLeft:20,paddingRight:30}}><Text style={{ fontSize: 15,fontWeight:'bold'}}>In African Cave, Signs of an Ancient Paint Factory</Text>{"\n"}10,july 2020 {'\u00A0'}10 min read</Text>
                </View>
           </View>
           
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:40,
    backgroundColor:"#e1f2fa"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    width: 36,
    height: 38,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  footimg: {
    width: 66,
    height: 68,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerview:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"baseline"
  },
  bodyview:{
    justifyContent:"space-between",
    paddingTop:10
  },
  footerview:{
    justifyContent:"space-between",
    paddingTop:25
  },
  content:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:"white",
    height:300
  }
});



