import { StyleSheet, Text, View } from "react-native";

type CardCabecalhoProps = {
  titulo: string;
  subtitulo: string;
};

export function CabecalhoAula({titulo, subtitulo}: CardCabecalhoProps) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
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
