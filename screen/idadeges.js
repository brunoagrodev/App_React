import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Estilos from '../estilos';

export default function Idadegestacao(){
  const [dia_ultra, setDiaUltra] = useState('');
  const [dia_atual, setDiaAtual]= useState('');
  const [idade, setIdade] = useState('');

  const calcularIdade = () => setIdade(dia_ultra >0 && dia_atual >0 ? 
  ((parseFloat(dia_atual) - parseFloat(dia_ultra))/7).toFixed(0): 'Informe valores positivos diferentes de zero')

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}> Insira os dados abaixo para calcular a idade gestacional.</Text>
      <TextInput
        placeholder="Dia da ultrassonografia"
        style={Estilos.paragraph} 
        keyboardType={'numeric'}
        value={dia_ultra}
        onChangeText={dia_ultra=>setDiaUltra(dia_ultra)}/>
      <TextInput
        placeholder="Dia Atual"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={dia_atual}
        onChangeText={dia_atual=>setDiaAtual(dia_atual)}/>
      <Button title='Calcular' onPress={calcularIdade} />
      <Text style={Estilos.paragraph}>{idade ? `\nIdade gestacional: ${idade}`: ''}</Text>
    </View>
  )
}
