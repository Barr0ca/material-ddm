import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  titulo: string;
  subtitulo: string;
};

export default function Cabecalho({ titulo, subtitulo }: HeaderProps) {
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 5,
  },
});
