import { Pressable, StyleSheet, Text, View } from "react-native";

type Header = {
  titulo: string;
  subtitulo: string;
};

export function CabecalhoAula({ titulo, subtitulo }: Header) {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fffec7",
    borderRadius: 10,
    padding: 16,
    gap: 8,
    alignItems: "center",
    width: "15%",
    minWidth: 250,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "700",
  },
  subtitulo: {
    fontSize: 12,
    color: "#919167",

  },
});
