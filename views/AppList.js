import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AppItem from "../components/AppItem";
import { getItems } from "../Database/Database";

export default function AppList({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => setItems(items));
  }, [route]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Churrascos</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {items.map((item) => {
          return (
            <AppItem
              key={item.id}
              id={item.id}
              nome={item.nomeChurrasco}
              carne={item.kgCarne + " g"}
              litros={item.bebidas + " ml"}
              sal={item.salGrosso + " g"}
              carvao={item.carvao + " g"}
              gelo={item.gelo + " g"}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D93600",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    width: "90%",
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
});
