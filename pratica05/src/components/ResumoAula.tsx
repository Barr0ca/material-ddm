import { StyleSheet, Text, View } from "react-native";

export default function ResumoAula() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Presentes</Text>
      </View>
      <View>
        <Text>Faltas</Text>
      </View>
      <View>
        <Text>Atividades</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: "#f3f4f6",
    flexDirection: "row"
  },
});
