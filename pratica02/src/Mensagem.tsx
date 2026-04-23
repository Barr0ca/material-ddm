import { Pressable, StyleSheet, Text, View } from "react-native";

type Frequencia = {
  mensagem: string;
};

export function Mensagem({ mensagem }: Frequencia) {
  return (
    <View>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mensagem: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f56218"
  }
});
