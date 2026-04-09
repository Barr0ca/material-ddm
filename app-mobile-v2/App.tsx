import { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { CardAluno } from './src/components/CardAluno';
import { CardParticipacao } from './src/components/CardParticipacao';
import { CabecalhoAula } from './src/components/CabecalhoAula';

export default function App() {
  const [participacao, setParticipacao] = useState(1);
  var [mensagem, setMensagem] = useState('Vamos começar?');


  function incrPart() {
    setParticipacao(participacao + 1);
  }
  function zerarPart() {
    setParticipacao(0);
  }

  if (participacao === 0) {
    mensagem = 'Vamos começar?'
  } else if (participacao < 4) {
    mensagem = 'Boa participação!'
  } else if (participacao >= 4) {
    mensagem = 'Excelente ritmo hoje!'
  }

  return (
    <View style={styles.container}>
      <CabecalhoAula 
        titulo='Aula 04'
        subtitulo='Aula de hoje apredemos props.'
      />
      <CardParticipacao 
        nome='Ian'
        participacoes={participacao}
        mensagem={mensagem}
        maisParticipacao={incrPart}
        zerarParticipacao={zerarPart}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1
  }
});
