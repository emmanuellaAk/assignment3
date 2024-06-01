
import { StyleSheet, Text, View,ScrollView  } from 'react-native';
import Searchbar from './components/searchbar';
import Topbar from './components/topbar';
import Category from './components/category';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Topbar/>
      <Searchbar/>
      <Category/>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    paddingTop: 52, 
    padding: 20, 
    backgroundColor:"#F7F0E8"
  }
});
