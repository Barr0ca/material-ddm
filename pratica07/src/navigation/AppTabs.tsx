import Ionicons from "@react-native-vector-icons/ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TarefasScreen } from "../screens/TarefasScreen";
import { InicioScreen } from "../screens/InicioScreen";
import { ResumoScreen } from "../screens/ResumoScreen";

export type RootTabParamList = {
  Inicio: { tarefaId: string; prioridade?: 'baixa' | 'média' | 'alta' } | undefined;
  Tarefas: { tarefaId: string; usuario: string } |  undefined;
  Resumo: undefined;
};


const Tab = createBottomTabNavigator<RootTabParamList>();

function obterIcone(nomeRota: keyof RootTabParamList, focused: boolean) {
  if (nomeRota === "Inicio") return focused ? "home" : "home-outline";
  if (nomeRota === "Tarefas") return focused ? "list" : "list-outline";
  return focused ? "document" : "document-outline";
}

export function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#635274" },
        headerTintColor: "#e4f5b1",
        tabBarActiveTintColor: "#512b52",
        tabBarInactiveTintColor: "#512b52",
        tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={obterIcone(route.name as keyof RootTabParamList, focused)}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Tarefas"
        component={TarefasScreen} 
        options={{ title: "Tarefas" }}
      />
      <Tab.Screen
        name="Resumo"
        component={ResumoScreen}
        options={{ title: "Resumo" }}
      />
    </Tab.Navigator>
  );
}
