import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ZodiacCard = ({ signo }) => {
  return (
    <View style={styles.card}>
      <Image source={signo.imagen} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{signo.nombre}</Text>
        <Text style={styles.text}>Fechas: {signo.fechas}</Text>
        <Text style={styles.text}>Elemento: {signo.elemento}</Text>
        <Text style={styles.text}>Astro: {signo.astro}</Text>
        <Text style={styles.text}>Piedra: {signo.piedra}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#12155B",
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
});

export default ZodiacCard;
