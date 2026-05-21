import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Pressable, Text, View } from 'react-native';
import type { RootTabParamList } from '../navigation/AppTabs';
import { styles } from '../styles';

type Props = BottomTabScreenProps<RootTabParamList, 'Tarefas'>;

export function TarefasScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas do dia</Text>
      <Text style={styles.subtitulo}>
        Esta aba representa um fluxo recorrente de trabalho de campo.
      </Text>

      <Pressable style={styles.botaoPrimario} onPress={() => navigation.navigate('Resumo')}>
        <Text style={styles.botaoPrimarioTexto}>Ver Resumo</Text>
      </Pressable>
    </View>
  );
}