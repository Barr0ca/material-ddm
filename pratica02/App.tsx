import { StyleSheet, View, Pressable, Text } from "react-native";
import { useState } from "react";
import { CabecalhoAula } from "./src/CabecalhoAula";
import { CardParticipacoes } from "./src/CardParticipacoes";
import { Mensagem } from "./src/Mensagem";
import { CardMeta } from "./src/CardMeta";

export default function App() {
  const [participacao, setParticipacao] = useState(0);

  function incParticipacao() {
    setParticipacao(() => participacao + 1);
  }

  function zeraParticipacao() {
    setParticipacao(0);
  }

  function decParticipacao() {
    setParticipacao(() => participacao - 1);
  }

  function msg() {
    if (participacao < 0) {
      setParticipacao(0);
      return "";
    } else if (participacao === 0) {
      return "Vamos começar?";
    } else if (participacao >= 1 && participacao <= 3) {
      return "Boa participação!";
    } else {
      return "Excelente ritmo hoje!";
    }
  }

  return (
    <View style={styles.body}>
      <Mensagem mensagem={msg()} />

      <CabecalhoAula
        titulo="Painel de Participação"
        subtitulo="Frequência na Aula"
      />

      <CardParticipacoes nome="Ian" participacoes={participacao} />

      <View style={styles.containerMetas}>
        <Text style={styles.tituloMetas}>Metas: </Text>
        <CardMeta nomeMeta="- Estudar estados em React Native" />
        <CardMeta nomeMeta="- Estudar props em React Native" />
        <CardMeta nomeMeta="- Estudar integração de props com estados em React Native" />
      </View>

      <View style={styles.containerBotoes}>
        <Pressable style={styles.botao} onPress={incParticipacao}>
          <Text style={styles.botaoTexto}>Frequência ++</Text>
        </Pressable>

        <Pressable style={styles.botao} onPress={zeraParticipacao}>
          <Text style={styles.botaoTexto}>Zerar Frequência</Text>
        </Pressable>

        <Pressable style={styles.botao} onPress={decParticipacao}>
          <Text style={styles.botaoTexto}>Frequência --</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#9dc9ac",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  containerBotoes: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  botao: {
    marginTop: 8,
    backgroundColor: "#f56218",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    userSelect: "none",
  },
  botaoTexto: {
    color: "#ffffff",
    fontWeight: "600",
  },
  tituloMetas: {
    fontSize: 18,
    fontWeight: "700",
  },
  containerMetas: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
});
