import { StyleSheet, Text, View } from "react-native";

export default function Rodape() {
  return (
    <View>
      <Text style={styles.rodape}>TSI - 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    marginTop: 20,
  },
});
