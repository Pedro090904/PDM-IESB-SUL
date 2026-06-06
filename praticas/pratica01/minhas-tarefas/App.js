import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { titulo } from './util';
import texto_default from './util';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      
      <Text style={{margin:20, color:'#171beeff', fontSize:30 }}>{texto_default}</Text>
      <Button title="Clique Aqui" />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    margin:20,
    color:'#00ee28ff', 
    fontSize:35,

  },
});