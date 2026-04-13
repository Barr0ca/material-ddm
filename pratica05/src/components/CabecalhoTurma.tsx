import { StyleSheet, Text, View } from "react-native";

export default function CabecalhoTurma({titulo, subtitulo}: {titulo: string, subtitulo: string}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      <View>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: "#00c3ff",
    borderRadius: 8,
    width: "75%",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: 700,
    color: "#fff",
  },
  subtitulo: {
    fontSize: 12,
    fontWeight: 500,
    color: "#fff",
  },
});
