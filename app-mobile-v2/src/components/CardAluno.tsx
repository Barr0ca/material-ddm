import { Pressable, StyleSheet, Text, View } from 'react-native';

type CardAlunoProps = {
  nome: string;
  presente: boolean;
  onAlternarPresenca: () => void;
};

export function CardAluno({ nome, presente, onAlternarPresenca }: CardAlunoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.status}>{presente ? 'Presente' : 'Ausente'}</Text>

      <Pressable style={styles.botao} onPress={onAlternarPresenca}>
        <Text style={styles.botaoTexto}>Alternar presença</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
  },
  status: {
    fontSize: 14,
    color: '#374151',
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#0f766e',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '50%'
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: '600',
    textDecorationLine: 'none'
  },
});