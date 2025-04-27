
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import Cliente from './screens/Cliente';
import Atendente from './screens/Atendente';
import Painel from './screens/Painel';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cliente" component={Cliente} />
        <Stack.Screen name="Atendente" component={Atendente} />
        <Stack.Screen name="Painel" component={Painel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Atendimento</Text>
      <Button title="Cliente" onPress={() => navigation.navigate('Cliente')} />
      <Button title="Atendente" onPress={() => navigation.navigate('Atendente')} />
      <Button title="Painel" onPress={() => navigation.navigate('Painel')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, marginBottom: 20 }
});
