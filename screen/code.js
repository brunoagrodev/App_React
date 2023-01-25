import React from 'react';
import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Styles from '../css/style'

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>

const Juros = (valor)=> valor*15/100

export function Jur(){
   return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{fontSize: 25}}>Valor em Juros: {Juros(100)}<Br/><Br/></Text>
      <Text style={Styles.paragraph,{fontSize: 18}}> O valor total será: {Juros(100)+100} </Text>
    </View>
  )
}
export function Desconto(){
  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{fontSize: 25}}>Valor Original: {100}<Br/><Br/></Text>
      <Text style={Styles.paragraph,{fontSize: 25}}>Valor do Desconto: {Juros(100)}<Br/><Br/></Text>
      <Text style={Styles.paragraph,{fontSize: 18}}>Valor descontado: {100-Juros(100)} </Text>
    </View>
  )
}

export function Idade_Gestacional(){
  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{}}></Text>
      <Text style={Styles.paragraph,{}}></Text>
      <Text style={Styles.paragraph,{}}></Text>
    </View>
  )
}


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
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center'}}> <Br/>{result ? 'o resultado é ' + result : ''}</Text>
    </SafeAreaView>
    </View>
  )
}


