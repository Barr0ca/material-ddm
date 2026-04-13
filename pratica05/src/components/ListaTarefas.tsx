import { StyleSheet, Text, View } from "react-native";

export default function ListaTarefas() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Lista de Tarefas</Text>
      </View>
      <View>
        <Text>- Criar uma Stylesheet</Text>
        <Text>- Pesquisar sobre CSS</Text>
        <Text>- Estudar React</Text>
        <Text>- Fazer prática 06</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: "#f3f4f6",
  },
});
