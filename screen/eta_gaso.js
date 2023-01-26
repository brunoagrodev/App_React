import React from 'react';
import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Styles from '../css/style'

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>


export function Etanol_Gasolina(){
  const [eta, setEta] = React.useState('');
  const [gaso, setGaso] = React.useState('');
  const [resEta, setResEta] = React.useState('');
  const [resGaso, setResGaso] = React.useState('');
  
  function Difference(){
    return(
      setResEta((parseFloat(eta)*parseFloat(10)).toFixed(2)),
      setResGaso((parseFloat(gaso)*parseFloat(14)).toFixed(2))
    )
  }
  
  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{}}>Medidor de km/l de Cada Combustível</Text>
     <SafeAreaView>
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center', width: 250}}
        onChangeText={eta=>setEta(eta)}
        value={eta}
        placeholder="Digite o nº de litros de Etanol"
        keyboardType="numeric"
      />
      <Br/>
      <Button
      title='Calcular'
      onPress={Difference}
      />
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center', fontWeight: 600}}> <Br/>{resEta ? 'Você tem uma autonomia de ' + resEta + ' km.' : ''}</Text>

      <Br/><Br/>
      
      <TextInput
        style={Styles.input, {textAlign: 'center', width: 250}}
        onChangeText={gaso=>setGaso(gaso)}
        value={gaso}
        placeholder="Digite o nº de litros de Gasolina"
        keyboardType="numeric"
      />
      <Br/>
      <Button
      title='Calcular'
      onPress={Difference}
      />
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center',  fontWeight: 600 }}> <Br/>{resGaso ? 'Você tem uma autonomia de ' + resGaso + ' km.' : ''}</Text>
    </SafeAreaView>
    </View>
  )
}


