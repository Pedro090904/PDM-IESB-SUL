
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import MetaList from './components/Metalist';
import MetaInput from './components/MetaInput';




export default function App() {
  
  const [metas, setMetas] = useState([]);

  

  function adicionarMetaHandler(inputMeta){
    setMetas([...metas, inputMeta])
  };

  
  return (
    <View style={styles.mainContainer}>

      <MetaInput onAddMeta={adicionarMetaHandler} />
     

      <View styles={styles.metaContainer}>
        <MetaList array={metas} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    padding : 30,
    Flex: 1,
    flexDirection: 'column',
  },

  metaContainer:{
    flex:15
  }
});
