import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Cadastro from "./components/Cadastro";
import { CardEntrega } from "./components/CardEntrega";
import Rodape from "./components/Rodape";

export default function App() {
  const [situacao, setSituacao] = useState(true);

  function alternarSituacao() {
    setSituacao((valorAtual) => !valorAtual);
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Cabecalho
          titulo="Vistoria Rápida"
          subtitulo="Aplicativo para facilitar a entrega e registro de mercadorias"
        />
        <Cadastro />
        <CardEntrega
          situacao={situacao}
          onAlternarSituacao={alternarSituacao}
        />
        <Rodape />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
