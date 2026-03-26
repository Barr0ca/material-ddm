import { StyleSheet, Text, View } from "react-native";

export function CardDisciplina() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>Tema da aula</Text>
      <Text>Estrutura de projeto, componentes e JSX.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
});
