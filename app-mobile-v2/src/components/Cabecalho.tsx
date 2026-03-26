import { StyleSheet, Text, View } from "react-native";

export function Cabecalho() {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>Desenvolvimento Mobile</Text>
      <Text style={styles.subtitulo}>Encontro 03</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    alignItems: "center",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitulo: {
    fontSize: 14,
    color: "#4B5563",
  },
});
