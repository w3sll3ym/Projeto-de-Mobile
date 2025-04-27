
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { chamarProximaSenha } from '../utils/servico';

export default function Atendente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chamar Próxima Senha</Text>
      <Button title="Chamar Senha" onPress={() => chamarProximaSenha()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, marginBottom: 20 }
});
