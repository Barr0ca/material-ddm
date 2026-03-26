import { StyleSheet, Text, View } from "react-native";

export function Rodape() {
  return (
    <View style={styles.rodape}>
      <Text>Curso TSI • 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    alignItems: "center",
    marginTop: 8,
  },
});
