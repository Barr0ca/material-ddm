import { StyleSheet, Text, View } from 'react-native';
import CabecalhoTurma from './src/components/CabecalhoTurma';
import ResumoAula from './src/components/ResumoAula';
import ListaTarefas from './src/components/ListaTarefas';

export default function App() {
  return (
    <View style={styles.container}>
      <CabecalhoTurma />
      <ResumoAula />
      <ListaTarefas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    alignItems: "center",
  },
});
