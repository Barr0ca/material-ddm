import { StyleSheet, Text, View } from "react-native";

export default function CabecalhoTurma() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Prática 05</Text>
      </View>
      <View>
        <Text style={styles.subtitulo}>Stylesheet e CSS</Text>
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
  titulo: { 
    fontSize: 24,
    fontWeight: 700
  },
  subtitulo: { 
    fontSize: 12,
    fontWeight: 500
  },
});
