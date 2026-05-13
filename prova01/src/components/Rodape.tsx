import { StyleSheet, Text, View } from "react-native";

export default function Rodape() {
  return (
    <View>
      <Text style={styles.rodape}>20241038060011  -  Ian de Araújo Galvão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    fontSize: 12,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    color: "#838383ff"
  },
});
