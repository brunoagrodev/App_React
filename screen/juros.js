import React from 'react';
import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Styles from '../css/style'

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>

export function Jur(){
  const [jur1, setJur1] = React.useState('');
  const [jur2, setJur2] = React.useState('');
  const [jurRes, setjurRes] = React.useState('');
  
  function CalcJur(){
    return(
      setjurRes(parseFloat(jur1)*(parseFloat(jur2/100)))
      
    )
  }
  
  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{}}>Calculadora de Juros</Text>
      <SafeAreaView>
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center'}}
        onChangeText={jur1=>setJur1(jur1)}
        value={jur1}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
      />
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center'}}
        onChangeText={jur2=>setJur2(jur2)}
        value={jur2}
        placeholder="Digite a % em Juros"
        keyboardType="numeric"
      />
      <Br/>
      <Button
      title='Calcular'
      onPress={CalcJur}
      />
      
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center', fontWeight: 600}}> <Br/>{  jurRes ?  'Os juros são R$ ' + jurRes + '\n O valor total é de R$ ' + (parseFloat(jur1)+ jurRes)  : ''}</Text>
    </SafeAreaView>
    </View>
  )
}




