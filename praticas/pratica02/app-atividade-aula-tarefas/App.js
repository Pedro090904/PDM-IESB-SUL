import { StyleSheet, View, Image } from 'react-native'; 
import { useState } from 'react';
import MetaList from './components/Metalist';
import MetaInput from './components/MetaInput';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  
  const [metas, setMetas] = useState([]);

  function adicionarMetaHandler(inputMeta){
    const novaMeta = {id: Math.random().toString(), texto: inputMeta};
    setMetas([...metas, novaMeta]);
  };

  function deletarMetaHandler(id){
    console.log(id);
    const novasMetas = metas.filter(meta => meta.id  !== id );
    setMetas(novasMetas);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/874/351/small_2x/instagram-apps-icon-free-png.png'}} 
          style={{width: 50, height: 50}}
          resizeMode="contain"
        />
      </View>

      <View style={styles.mainContainer}>

          <MetaInput onAddMeta={adicionarMetaHandler} />
          
          
          <View style={styles.metaContainer}>
            <MetaList array={metas} onDeleteItem={deletarMetaHandler} />
          </View>

      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    padding: 30,
    flex: 1, 
    flexDirection: 'column',
  },

  metaContainer:{
    flex: 15,
  },

  safeArea:{
    flex: 1,
    backgroundColor: '#fff',
  },

  imageContainer:{
    alignItems: 'flex-start', 
    marginTop: 10,
    paddingLeft: 30,
  },

  image: {
    width: 50, 
    height: 50,
  },
});