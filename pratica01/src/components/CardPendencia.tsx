import { StyleSheet, Text, View } from "react-native";

export default function CardPendencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pendências</Text>
      <Text style={styles.pendencia}>- Entregar a prática 01 de DDM</Text>
      <Text style={styles.pendencia}>
        - Estudar sobre props para a próxima aula
      </Text>
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
  pendencia: {
    fontSize: 12,
    color: "#7d7d7d",
    fontWeight: 400,
    width: 300,
  },
});
