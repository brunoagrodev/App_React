import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from './css/style'
import {Br, Jur} from './screen/juros'
import {Desconto} from './screen/desconto'
import IdadeGestacional from './screen/idadeges'
import {ConversorMoedas} from './screen/convermoeda'
import {Etanol_Gasolina} from './screen/eta_gaso'


function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.paragraph}>Funcionalidades</Text>
      <Button
        title="Juros"
        onPress={() => navigation.navigate('Juros')}
      />
      <Br/>
      <Button
        title="Desconto"
        onPress={() => navigation.navigate('Desconto')}
      />
      <Br/>
      <Button
        title="Idade Gestacional"
        onPress={() => navigation.navigate('Idade Gestacional')}
      />
      <Br/>
      <Button
        title="Conversor de Moedas"
        onPress={() => navigation.navigate('Conversor de Moedas')}
      />
      <Br/>
      <Button
        title="Etanol ou Gasolina"
        onPress={() => navigation.navigate('Etanol ou Gasolina')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Canivete XONG' }} />
          <Stack.Screen name="Juros" component={Jur} options={{ title: 'Juros'}} />
          <Stack.Screen name="Desconto" component={Desconto} options={{ title: 'Desconto'}} />
          <Stack.Screen name="Idade Gestacional" component={IdadeGestacional} options={{ title: 'Idade Gestacional'}} />
          <Stack.Screen name="Conversor de Moedas" component={ConversorMoedas} options={{ title: 'Conversor de Moedas'}} />
          <Stack.Screen name="Etanol ou Gasolina" component={Etanol_Gasolina} options={{ title: 'Etanol ou Gasolina'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


