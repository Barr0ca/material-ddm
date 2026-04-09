import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardAluno } from './src/components/CardAluno';

export default function App() {
  const [presente, setPresente] = useState(false);

  function alternarPresenca() {
    setPresente((valorAtual) => !valorAtual);
  }

  return (
    <View style={styles.container}>
      <CardAluno
        nome="Aluno Exemplo"
        presente={presente}
        onAlternarPresenca={alternarPresenca}
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
});
