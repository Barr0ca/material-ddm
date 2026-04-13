import { StyleSheet, View, ScrollView } from "react-native";
import CabecalhoTurma from "./src/components/CabecalhoTurma";
import ResumoAula from "./src/components/ResumoAula";
import ListaTarefas from "./src/components/ListaTarefas";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CabecalhoTurma titulo="Prática 05" subtitulo="Stylesheet e CSS" />
        <ResumoAula />
        <ListaTarefas />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    alignItems: "center",
    marginTop: 32,
  },
});
