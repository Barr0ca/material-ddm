import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AtendimentosStackParamList } from '../navigation/AtendimentosStack';

type Props = NativeStackScreenProps<AtendimentosStackParamList, 'AtendimentoLista'>;

export function AtendimentoLista({ navigation, route }: Props) {

  const ultimoChamadoId = route.params?.ultimoChamadoId;
  const ultimaAcao = route.params?.ultimaAcao;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atendimentos do dia</Text>
      <Text style={styles.subtitulo}>
        Esta aba representa um fluxo recorrente de trabalho de campo.
      </Text>

      {ultimoChamadoId && ultimaAcao ? (
        <View style={styles.alerta}>
          <Text style={styles.alertaTexto}>
            Último atendimento: Chamado {ultimoChamadoId}; Ação: {ultimaAcao}
          </Text>
        </View>
      ) : null}

      <Pressable style={styles.botaoPrimario} onPress={() => navigation.navigate('DetalhesAtendimento', { chamadoId: 'CN-992', cliente: 'Ian', prioridade: 'alta' })}>
        <Text style={styles.botaoPrimarioTexto}>Ver Detalhes do Atendimento</Text>
      </Pressable>
    </View>
  );
}