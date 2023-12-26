import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriasScreen from '../screens/CategoriasScreen';
import PersonajesScreen from '../screens/PersonajesScreen';
import AjustesScreen from '../screens/AjustesScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={CategoriasScreen} />
      <Stack.Screen name="Personajes" component={PersonajesScreen} />
      <Stack.Screen name="Ajustes" component={AjustesScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

