import { StyleSheet, Text, View } from "react-native";

export default function ProximaAula() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Próxima Aula: Props...</Text>
      <Text style={styles.descricao}>
        Props em React Native são parâmetros lidos apenas, passados de
        componentes pais para filhos para tornar interfaces dinâmicas e
        reutilizáveis.
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
  descricao: {
    fontSize: 16,
    fontWeight: 400,
    color: "#7d7d7d",
    width: 300,
  },
});
