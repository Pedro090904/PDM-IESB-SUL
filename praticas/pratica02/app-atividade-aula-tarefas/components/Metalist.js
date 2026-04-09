import { StyleSheet, ScrollView, Pressable, Text, View } from "react-native";

function MetaList(props){
    
    return(
    <ScrollView> 

        {props.array.map((meta) => {
            
            return(
                <View key={meta.id} style={styles.item}>
                    <Pressable android_ripple={{color: 'yellow'}} key={meta.id} onePress={() => props.onDeleteItem(meta.id)}>
                        <Text style={{padding: 10}}>
                            {meta.texto}  
                        </Text>
                    </Pressable>
                </View>
            )
            
          }
        )}
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
      margin: 8,
      borderRadius: 5,
      backgroundColor: "lightblue",
    }
})

export default MetaList;