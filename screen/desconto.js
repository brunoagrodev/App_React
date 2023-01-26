import React from 'react';
import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Styles from '../css/style'

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>


export function Desconto(){
  const [des1, setDes1] = React.useState('');
  const [des2, setDes2] = React.useState('');
  const [desRes, setDesres] = React.useState('');
  
  function CalcDes(){
    return(
      setDesres(parseFloat(des1)*(parseFloat(des2/100)))
      
    )
  }
 

  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{}}>Calculadora de Desconto</Text>
      <SafeAreaView>
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center'}}
        onChangeText={des1=>setDes1(des1)}
        value={des1}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
      />
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center'}}
        onChangeText={des2=>setDes2(des2)}
        value={des2}
        placeholder="Digite a % de Desconto"
        keyboardType="numeric"
      />
      <Br/>
      <Button
      title='Calcular'
      onPress={CalcDes}
      />
      
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center', fontWeight: 600}}> <Br/>{ desRes ? 'O valor do desconto é ' + desRes + ' \n O valor total é ' + (parseFloat(des1) - desRes) :''}</Text>
    </SafeAreaView>
    </View>
  )
}




