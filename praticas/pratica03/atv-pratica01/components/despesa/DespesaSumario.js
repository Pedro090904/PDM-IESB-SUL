import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.soma}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e6e6fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  periodo: {
    fontSize: 16,
    color: '#333',
  },
  soma: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  }
});

export default DespesaSumario;