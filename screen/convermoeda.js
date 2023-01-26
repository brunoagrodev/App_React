import React from 'react';
import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Styles from '../css/style'

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>

export function ConversorMoedas(){
  const [val1, setVal1] = React.useState('');
  const [val2, setVal2] = React.useState('');
  const [result, setResult] = React.useState('');
  
  function Somar(){
    return(
      setResult((parseFloat(val1)*parseFloat(val2)).toFixed(2))
    )
  }
  
  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{}}>Conversor de Real para Euro ou Dolar</Text>
      <SafeAreaView>
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center'}}
        onChangeText={val1=>setVal1(val1)}
        value={val1}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
      />
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center'}}
        onChangeText={val2=>setVal2(val2)}
        value={val2}
        placeholder="Digite o valor em € ou $"
        keyboardType="numeric"
      />
      <Br/>
      <Button
      title='Somar'
      onPress={Somar}
      />
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center'}}> <Br/>{result ? 'o resultado é R$ ' + result : ''}</Text>
    </SafeAreaView>
    </View>
  )
}





