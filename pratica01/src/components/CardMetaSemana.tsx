import { StyleSheet, Text, View } from "react-native";

export default function CardMetaSemana() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Metas da Semana</Text>
      <Text style={styles.meta}>- Concluir o projeto de React Native</Text>
      <Text style={styles.meta}>- Aprofundar conhecimento em Typescript</Text>
      <Text style={styles.meta}>- Concluir exercícios de revisão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 10,
  },
  meta: {
    fontSize: 12,
    fontWeight: 400,
    color: "#7d7d7d",
    width: 300,
  },
});
