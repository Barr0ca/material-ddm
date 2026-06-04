import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AtendimentosStackParamList } from '../navigation/AtendimentosStack';

type Props = NativeStackScreenProps<AtendimentosStackParamList, 'FinalizacaoAtendimento'>;

export function FinalizacaoAtendimento({ navigation, route }: Props) {

  const { chamadoId, tecnico, status } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Finalização de Atendimento</Text>
      <Text style={styles.subtitulo}>
        Atendimento feito pelo técnico {tecnico}; Chamado {chamadoId}; Status {status}.
      </Text>

      <Pressable style={styles.botaoPrimario} onPress={() => navigation.navigate('AtendimentoLista', { ultimoChamadoId: chamadoId, ultimaAcao: status })}>
        <Text style={styles.botaoPrimarioTexto}>Voltar para lista de atendimentos</Text>
      </Pressable>
    </View>
  );
}