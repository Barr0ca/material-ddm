import { Pressable, StyleSheet, Text, View } from 'react-native';

type CardEntregaProps = {
  situacao: boolean;
  onAlternarSituacao: () => void;
};

export function CardEntrega({ situacao, onAlternarSituacao }: CardEntregaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.status}>{situacao ? 'Avaria' : 'Íntegra'}</Text>

      <Pressable style={styles.botao} onPress={onAlternarSituacao}>
        <Text style={styles.botaoTexto}>Alternar situacao</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    gap: 8,
  },
  status: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: "center",
  },
  botao: {
    marginTop: 8,
    backgroundColor: "#007a06ff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    userSelect: "none",
  },
  botaoTexto: {
    color: "#ffffff",
    fontWeight: "600",
  },
});