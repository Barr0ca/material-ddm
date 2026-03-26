import { StyleSheet, Text, View } from "react-native";
import { Cabecalho } from "./src/components/Cabecalho";
import { CardDisciplina } from "./src/components/CardDisciplina";
import { Rodape } from "./src/components/Rodape";

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <CardDisciplina />
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    justifyContent: "center",
    backgroundColor: "#F5F7FA",
  },
});
