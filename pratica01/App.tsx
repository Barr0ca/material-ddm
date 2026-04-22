import { StyleSheet, View } from "react-native";
import BoasVindas from "./src/components/BoasVindas";
import ProximaAula from "./src/components/ProximaAula";
import CardPendencia from "./src/components/CardPendencia";
import Rodape from "./src/components/Rodape";
import CardMetaSemana from "./src/components/CardMetaSemana";

export default function App() {
  return (
    <View style={styles.body}>
      <BoasVindas />
      <View style={styles.container}>
        <ProximaAula />
        <CardPendencia />
        <CardMetaSemana />
      </View>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#9dc9ac",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fffec7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 20,
  },
});
