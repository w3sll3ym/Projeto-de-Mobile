
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { emitirSenha } from '../utils/servico';

export default function Cliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emitir Senha</Text>
      <Button title="Senha Prioritária (SP)" onPress={() => emitirSenha('SP')} />
      <Button title="Senha Geral (SG)" onPress={() => emitirSenha('SG')} />
      <Button title="Retirada de Exames (SE)" onPress={() => emitirSenha('SE')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, marginBottom: 20 }
});
