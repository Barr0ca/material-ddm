import { StyleSheet, Text, View } from "react-native";

export default function BoasVindas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ian de Araújo</Text>
      <Text style={styles.subtitulo}>Tecnólogo em Sistemas para Internet</Text>
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
  subtitulo: {
    fontSize: 18,
    fontWeight: 400,
  },
});
