import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { 
  rotulo_btn_cadastro_meta,
  rotulo_input_meta, rotulo_lista_metas  
} from './mensagens';

export default function App() {
  return (
    <View style={styles.mainContainer}>

      <View style={{width: '60%', position: 'absolute', left:'5', top:40}}>
        <TextInput placeholder={rotulo_input_meta}/>
      </View>
      
      <View style={{width: '40%', position: 'absolute', right:'5', top: 70}}>
        <Button title={rotulo_btn_cadastro_meta}/>
      </View>
      
      <View style={{width: 150, position: 'absolute', left:'5', top: 90}}>
        <Text>{rotulo_lista_metas}</Text>
      </View>
      
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
  mainContainer:{
    padding : 30,
  }

  ,
  inputText: {
    border: 1,
    borderColor: '#e61919ff',
    padding: 10,
  }
});
