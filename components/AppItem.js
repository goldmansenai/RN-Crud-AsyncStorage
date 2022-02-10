import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function AppItem(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textItem}>{props.carne}</Text>
        <Text style={styles.textItem}>{props.litros}</Text>
        <Text style={styles.textItem}>{props.sal}</Text>
        <Text style={styles.textItem}>{props.carvao}</Text>
        <Text style={styles.textItem}>{props.gelo}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginTop: 10,
  },
  editButton: {
    marginLeft: 10,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  textItem: {
    fontSize: 20,
  },
});
