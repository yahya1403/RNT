import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, TouchableOpacity, Text, View, Image, Button } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'
import axios from 'axios';
import Moment from 'moment';


export default function Home({ navigation }) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-08-16&sortBy=popularity&apiKey=d0a06c85e615433f9c66ffbf8feb3f82').then(res => {
      const newArt = res.data.articles.map((child) => {
        return child;
      })
      setData(newArt);
      console.log(data);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerview}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png' }} />
          <Text style={{ fontSize: 10 }}>{Moment(new Date().toLocaleString()).format('d MMM y')}</Text>
          <Image
            style={{ height: 20, width: 20 }}
            source={{ uri: 'https://img.icons8.com/ios/452/search--v1.png' }} />
        </View>
        <View style={styles.bodyview}>
          <Text style={{ fontSize: 30, paddingBottom: 15 }}>Breaking News</Text>
          <View style={styles.content}>
            <TouchableOpacity activeOpacity={.5} onPress={() => { navigation.navigate('Detail', { itemId: 86 }) }}>
              <Image
                style={{ height: 180, width: 'auto', borderTopLeftRadius: 20, borderTopRightRadius: 20, }}
                source={{ uri: 'https://previews.123rf.com/images/man64/man641509/man64150900008/44761344-passenger-airplane-flying-over-sea.jpg' }} />
              <Text style={{ fontSize: 18, padding: 5, fontWeight: 'bold' }}>Indonesia's Sriwijaya Air flight disappears minutes after take-off from Jakarta</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
              <Image
                style={styles.logo}
                source={{ uri: 'https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png' }} />
              <Text style={{ fontSize: 15, padding: 10 }}>John Smith</Text>
              <Text style={{ fontSize: 10, padding: 10 }}><Icon name='calendar' type='evilicon' color='#517fa4' />
                {Moment(new Date().toLocaleString()).format('d MMM y')}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => (
            <View style={styles.footerview} key={item.id}>
              <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
                <Image
                  style={styles.footimg}
                  source={{ uri: item.urlToImage }} />
                <Text style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 25 }}><Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ fontSize: 10 }}>{"\n"}<Icon name='calendar' type='evilicon' color='#517fa4' />{Moment(item.publishedAt).format('d MMM y')} {'\u00A0'}<Icon name='clock' type='evilicon' color='#517fa4' />10 min read</Text></Text>
              </View>
            </View>
          )}
        />

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
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "white",
    height: 300
  }
});




