import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AtendimentoLista } from '../screens/AtendimentoListaScreen';
import { DetalhesAtendimento } from '../screens/DetalhesAtendimentoScreen';
import { FinalizacaoAtendimento } from '../screens/FinalizacaoAtendimentoScreen';

export type AtendimentosStackParamList = {
  AtendimentoLista:     
    |   {
        ultimoChamadoId?: string;
        ultimaAcao?: 'concluido' | 'pendente';
        }
    |   undefined;
  DetalhesAtendimento: 
    {
        chamadoId: string;
        cliente: string;
        prioridade?: 'alta' | 'normal';
    };
  FinalizacaoAtendimento: 
    {
        chamadoId: string;
        tecnico: string;
        status:'concluido' | 'pendente';     
    };
};

const Stack = createNativeStackNavigator<AtendimentosStackParamList>();

export function AtendimentosStack() {
  return (
    <Stack.Navigator
      initialRouteName="AtendimentoLista"
      screenOptions={{
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#f8fafc',
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: '#f8fafc' },
      }}
    >
      <Stack.Screen
        name="AtendimentoLista"
        component={AtendimentoLista}
        options={{ title: 'Lista de Atendimentos' }}
      />
      <Stack.Screen
        name="DetalhesAtendimento"
        component={DetalhesAtendimento}
        options={{ title: 'Detalhes do Atendimento' }}
        initialParams={{ prioridade: 'normal' }}
      />
      <Stack.Screen
        name="FinalizacaoAtendimento"
        component={FinalizacaoAtendimento}
        options={{ title: 'Finalização do Atendimento', headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}