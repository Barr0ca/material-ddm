import { StyleSheet, Text, View } from "react-native";

function Tarefa({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <View style={styles.cardTarefa}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={{color: "#fff"}}>-</Text>
      <Text style={[styles.cardValor, {color: valor === "Concluída" ? "#4caf50" : "#ff9800"}]}>{valor}</Text>
    </View>
  );
}

export default function ListaTarefas() {
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Lista de Tarefas</Text>
      <Tarefa titulo="Pesquisar sobre Stylesheet" valor="Concluída" />
      <Tarefa titulo="Pesquisar sobre CSS" valor="Concluída" />
      <Tarefa titulo="Estudar React" valor="Pendente" /> 
      <Tarefa titulo="Fazer prática 06" valor="Pendente" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: "#3065c6",
    borderRadius: 8,
    width: "75%",
    alignItems: "center",
  },
  Titulo: {
    fontSize: 18,
    fontWeight: 700,
    color: "#fff",
  },
  cardTarefa: {
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  cardTitulo: {
    fontSize: 16,
    color: "#fff",
  },
  cardValor: {
    fontSize: 12,
  },
});
