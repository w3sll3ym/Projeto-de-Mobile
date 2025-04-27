
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ultimasChamadas } from '../utils/servico';

export default function Painel() {
  const [senhas, setSenhas] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSenhas([...ultimasChamadas]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimas 5 Senhas Chamadas</Text>
      <FlatList
        data={senhas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 18, padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }
});
