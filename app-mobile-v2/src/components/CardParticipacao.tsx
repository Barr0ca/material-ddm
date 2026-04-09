import { StyleSheet, Text, View, Pressable } from "react-native";

type CardParticipacaoProps = {
  nome: string;
  participacoes: number;
  mensagem: string;
  maisParticipacao: () => void;
  zerarParticipacao: () => void;
};

export function CardParticipacao({nome, participacoes, mensagem, maisParticipacao, zerarParticipacao}: CardParticipacaoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>Participações: {participacoes}</Text>

      <View style={styles.cardBotoes}>
        <Pressable style={styles.botao} onPress={maisParticipacao}>
          <Text style={styles.botaoTexto}>Mais</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={zerarParticipacao}>
          <Text style={styles.botaoTexto}>Zerar</Text>
        </Pressable>
      </View>

      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    alignItems: 'center'
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#0f766e',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '50%',
    margin: 5,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: '600',
  },
  cardBotoes: {
    flexDirection: 'row',
  }
});
