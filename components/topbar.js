import { View, Text, StyleSheet, Image } from "react-native";

export default function Topbar() {
  return (
    <View style={styles.topbar}>
        <View>
            <Text style={styles.greeting}>Hello , Devs</Text>
            <Text>14 tasks today</Text>
        </View>
        <View style={styles.profile}>
            <Image source={require("../assets/person.png")}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    topbar:{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection:'row',
        width: '100%',
        borderColor:'black',
    },
    greeting:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    profile:{
        backgroundColor:'white',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});