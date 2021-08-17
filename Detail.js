import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Image, Button } from 'react-native';
import { SearchBar } from 'react-native-elements'

export default function Detail({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerview}>
          <TouchableOpacity activeOpacity={.5} onPress={() => { navigation.navigate('Home') }}>
            <Image
              style={{ height: 30, width: 30 }}
              source={{ uri: 'https://static.thenounproject.com/png/344330-200.png' }} /></TouchableOpacity>
          <Image
            style={{ height: 30, width: 30 }}
            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/user-interface-3-3/34/251-512.png' }} />
        </View>
        <View style={styles.bodyview}>
          <Image
            style={styles.img}
            source={{ uri: 'https://previews.123rf.com/images/man64/man641509/man64150900008/44761344-passenger-airplane-flying-over-sea.jpg' }} />
          <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 18 }}>Indonesia's Sriwijaya Air flight disappears minutes after take-off from Jakarta</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png' }} />
          <Text style={{ fontSize: 15, padding: 10 }}>John Smith</Text>
          <Text style={{ fontSize: 10, padding: 10, alignContent: 'flex-end' }}>{new Date().toLocaleString()}</Text>
        </View>
        <View style={styles.footerview}>
          <Text style={{ padding: 10 }}>
            In the Picardie mid-air collision, a de Havilland DH.18A, G-EAWO, operated by Daimler Hire Ltd.,
             </Text>
          <Text style={{ padding: 10 }}>
            This List of accidents and incidents involving commercial aircraft includes notable events that have a corresponding Wikipedia article.The list is grouped by the year in which the accident or incident occurred. all four on board are killed.all 13 passengers and crew lose their lives as well as one person on the ground.

             </Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#e1f2fa"
  },
  logo: {
    width: 36,
    height: 38,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  img: {
    height: 180,
    width: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  bodyview: {
    justifyContent: "space-between",
    paddingTop: 10
  },
  footerview: {
    justifyContent: "space-between",
    paddingTop: 25
  },
});
