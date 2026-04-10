import { StyleSheet, Text, View } from "react-native";

export default function ListaTarefas() {
  return (
    <View style={styles.container}>
      <View style={styles.blocoA}>
        <Text>Bloco A</Text>
      </View>
      <View style={styles.blocoB}>
        <Text>Bloco B</Text>
      </View>
      <View style={styles.blocoC}>
        <Text>Bloco C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: "#f3f4f6",
  },
  blocoA: { backgroundColor: "#dbeafe", padding: 12, borderRadius: 8 },
  blocoB: { backgroundColor: "#dcfce7", padding: 12, borderRadius: 8 },
  blocoC: { backgroundColor: "#fee2e2", padding: 12, borderRadius: 8 },
});
