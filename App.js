
import { StyleSheet, Text, View,ScrollView  } from 'react-native';
import Searchbar from './components/searchbar';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Searchbar/>
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
