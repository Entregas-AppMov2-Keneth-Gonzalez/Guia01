import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ZodiacCard from './components/ZodiacCard';

const signos = [
  {
    nombre: 'Aries',
    fechas: '21 Marzo - 19 Abril',
    elemento: 'Fuego',
    astro: 'Marte',
    piedra: 'Diamante',
    imagen: require('./assets/images/aries.jpeg'),
  },
  {
    nombre: 'Tauro',
    fechas: '20 Abril - 20 Mayo',
    elemento: 'Tierra',
    astro: 'Venus',
    piedra: 'Esmeralda',
    imagen: require('./assets/images/tauro.jpeg'),
  },
  {
    nombre: 'Géminis',
    fechas: '21 Mayo - 20 Junio',
    elemento: 'Aire',
    astro: 'Mercurio',
    piedra: 'Ágata',
    imagen: require('./assets/images/geminis.jpeg'),
  },
  {
    nombre: 'Cáncer',
    fechas: '21 Junio - 22 Julio',
    elemento: 'Agua',
    astro: 'Luna',
    piedra: 'Perla',
    imagen: require('./assets/images/cancer.jpeg'),
  },
  {
    nombre: 'Leo',
    fechas: '23 Julio - 22 Agosto',
    elemento: 'Fuego',
    astro: 'Sol',
    piedra: 'Rubí',
    imagen: require('./assets/images/leo.jpeg'),
  },
  {
    nombre: 'Virgo',
    fechas: '23 Agosto - 22 Septiembre',
    elemento: 'Tierra',
    astro: 'Mercurio',
    piedra: 'Zafiro',
    imagen: require('./assets/images/virgo.jpeg'),
  },
  {
    nombre: 'Libra',
    fechas: '23 Septiembre - 22 Octubre',
    elemento: 'Aire',
    astro: 'Venus',
    piedra: 'Ópalo',
    imagen: require('./assets/images/libra.jpeg'),
  },
  {
    nombre: 'Escorpio',
    fechas: '23 Octubre - 21 Noviembre',
    elemento: 'Agua',
    astro: 'Plutón y Marte',
    piedra: 'Topacio',
    imagen: require('./assets/images/escorpio.jpeg'),
  },
  {
    nombre: 'Sagitario',
    fechas: '22 Noviembre - 21 Diciembre',
    elemento: 'Fuego',
    astro: 'Júpiter',
    piedra: 'Turquesa',
    imagen: require('./assets/images/sagitario.jpeg'),
  },
  {
    nombre: 'Capricornio',
    fechas: '22 Diciembre - 19 Enero',
    elemento: 'Tierra',
    astro: 'Saturno',
    piedra: 'Granate',
    imagen: require('./assets/images/capricornio.jpeg'),
  },
  {
    nombre: 'Acuario',
    fechas: '20 Enero - 18 Febrero',
    elemento: 'Aire',
    astro: 'Urano y Saturno',
    piedra: 'Amatista',
    imagen: require('./assets/images/acuario.jpeg'),
  },
  {
    nombre: 'Piscis',
    fechas: '19 Febrero - 20 Marzo',
    elemento: 'Agua',
    astro: 'Neptuno y Júpiter',
    piedra: 'Aguamarina',
    imagen: require('./assets/images/piscis.jpeg'),
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={signos}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => <ZodiacCard signo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 10,
  },
});

export default App;
