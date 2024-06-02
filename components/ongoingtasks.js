import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
  { key: 1, name: 'Mobile App Development' },
  { key: 2, name: 'Web Development' },
  { key: 3, name: 'Pushups' },
  { key: 4, name: 'DSA' },
  { key: 5, name: 'Create  App' },
  { key: 6, name: 'Study' },
  { key: 7, name: 'Information Modelling' },
  { key: 8, name: 'Correction of errors' },
  { key: 9, name: 'Research' },
  { key: 10, name: 'Listen to music' },
  { key: 11, name: 'Personal Project' },
  { key: 12, name: 'Brazil' },
  { key: 13, name: 'Savings' },
  { key: 14, name: 'Group Meeting' },
  { key: 15, name: 'Review' },
];

export default function Tasks() {
    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>Ongoing Tasks</Text>
            <View style={styles.listContainer}>
                {tasks.map(task => (
                    <View style={styles.taskContainer} key={task.key}>
                        <Text style={styles.bigText}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    listContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    taskContainer: {
        width: 380, 
        marginBottom: 20,
        padding: 30,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: '#E8D1BA',
        borderRadius: 20,
        height: 100
    },
    bigText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
});
