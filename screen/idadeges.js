import React from 'react';
import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Styles from '../css/style'

//função para Break
export const Br  = ()=> <Text>{'\n'}</Text>

export function Idade_Gestacional(){
  return(
    <View style={Styles.container}>
      <Text style={Styles.paragraph,{}}></Text>
      <Text style={Styles.paragraph,{}}></Text>
      <Text style={Styles.paragraph,{}}></Text>
    </View>
  )
}





