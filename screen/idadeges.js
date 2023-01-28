import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Styles from '../css/style';

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>

export default function Idadegestacao(){
  const [dia_ultra, setDiaUltra] = useState('');
  const [dia_atual, setDiaAtual]= useState('');
  const [idade, setIdade] = useState('');

  const calcularIdade = () => setIdade(dia_ultra >0 && dia_atual >0 ? 
  ((parseFloat(dia_atual) - parseFloat(dia_ultra))/7).toFixed(0): 'Informe valores positivos diferentes de zero')

  return (
    <View style={Styles.container}>
      <Text style={Styles.paragraph, {textAlign: 'center'}}> Insira os dados abaixo para calcular a idade gestacional.</Text>
      <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center', width: 250}}
        placeholder="Dia da ultrassonografia" 
        keyboardType={'numeric'}
        value={dia_ultra}
        onChangeText={dia_ultra=>setDiaUltra(dia_ultra)}/>
        <Br/>
      <TextInput
        style={Styles.input, {textAlign: 'center', width: 250}}
        placeholder="Dia Atual"
        keyboardType={'numeric'}
        value={dia_atual}
        onChangeText={dia_atual=>setDiaAtual(dia_atual)}/>
        <Br/>
      <Button title='Calcular' onPress={calcularIdade} />
      <Text style={Styles.paragraph, {fontSize: 15, textAlign: 'center',  fontWeight: 600 }}>{idade ? `\nIdade gestacional: ${idade}`: ''}</Text>
    </View>
  )
}
