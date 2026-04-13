import { StyleSheet, Text, View } from "react-native";

function Indicador({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <View style={styles.cardIndicador}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardValor}>{valor}</Text>
    </View>
  );
}

export default function ResumoAula() {
  return (
    <View style={styles.container}>
      <Indicador titulo="Presentes" valor="25" />
      <Indicador titulo="Faltas" valor="5" />
      <Indicador titulo="Atividades" valor="10" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: "#578fff",
    flexDirection: "row",
    borderRadius: 8,
    width: "75%",
    justifyContent: "space-around",
  },
  cardIndicador: {
    borderRadius: 8,
    alignItems: "center",
    gap: 4,
    width: "15%",
  },
  cardTitulo: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
  },
  cardValor: {
    fontSize: 36,
    fontWeight: 700,
    color: "#00f7ff",
  },
});
