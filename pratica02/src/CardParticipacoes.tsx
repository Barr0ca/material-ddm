import { Pressable, StyleSheet, Text, View } from "react-native";

type Frequencia = {
  nome: string;
  participacoes: number;
};

export function CardParticipacoes({ nome, participacoes }: Frequencia) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.participacoes}>{participacoes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffec7",
    borderRadius: 10,
    padding: 16,
    gap: 8,
    alignItems: "center",
    width: "15%",
    minWidth: 250,
  },
  nome: {
    fontSize: 18,
    fontWeight: "700",
  },
  participacoes: {
    fontSize: 12,
    color: "#919167",
  },
});
