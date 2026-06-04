import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../screens/DashboardScreen';
import { RelatoriosScreen } from '../screens/RelatorioScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import { AtendimentosStackParamList } from './AtendimentosStack';
import { AtendimentosStack } from './AtendimentosStack';

export type RootTabParamList = {
  Dashboard: undefined;
  Atendimentos: NavigatorScreenParams<AtendimentosStackParamList> | undefined;
  Relatorios: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function obterIcone(nomeRota: keyof RootTabParamList, focused: boolean) {
  if (nomeRota === 'Dashboard') return focused ? 'home' : 'home-outline';
  if (nomeRota === 'Atendimentos') return focused ? 'list' : 'list-outline';
  return focused ? 'bar-chart' : 'bar-chart-outline';
}

export function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#f8fafc',
        tabBarActiveTintColor: '#0f766e',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 6 },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={obterIcone(route.name as keyof RootTabParamList, focused)}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Painel' }} />
      <Tab.Screen
        name="Atendimentos"
        component={AtendimentosStack}
        options={{ title: 'Atendimentos', headerShown: false }}
      />
      <Tab.Screen name="Relatorios" component={RelatoriosScreen} options={{ title: 'Relatórios' }} />
    </Tab.Navigator>
  );
}