
import { useState } from 'react';
import { Text, View, Button, TextInput, SafeAreaView} from 'react-native';
import Styles from '../css/style';

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>

export default function App() {
  const Br = ()=><Text>{'\n'}</Text>
  const [base, setBase]= useState('');
  const [altura, setAltura]= useState('');
  const [area, setArea]= useState('');
  const Area = ()=> setArea( base>0 && altura>0 ? parseFloat(base)*parseFloat(altura)/2:'')
  
  return (
    <View style={Styles.container}>
      <Text style={Styles.paragraph, {textAlign: 'center'}}>Insira os dados para calcular a área do triângulo:</Text>   
      <SafeAreaView>
      <Br/>
      <TextInput 
        style={Styles.input, {textAlign: 'center', width: 100}}
        placeholder='Digite a base'
        keyboardType={'numeric'}
        onChangeText={base => setBase(base)}/>
        <Br/>
      <TextInput 
        style={Styles.input, {textAlign: 'center', width: 100}}
        placeholder='Digite a altura'
        keyboardType={'numeric'}
        onChangeText={altura => setAltura(altura)}/>
      <Br/>
      <Button title='Calcular' 
      onPress={Area}/>
      <Br/>   
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center',  fontWeight: 600 }}>{area ? `Resultado: ${area}` : ''}</Text>
      </SafeAreaView>
    </View>
  );
}