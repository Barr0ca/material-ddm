import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AtendimentosScreen } from "../screens/AtendimentosScreen";
import { DashboardScreen } from "../screens/DashboardScreen";
import { RelatoriosScreen } from "../screens/RelatoriosScreen";

export type RootTabParamList = {
  Dashboard: undefined;
  Atendimentos: undefined;
  Relatorios: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function obterIcone(nomeRota: keyof RootTabParamList, focused: boolean) {
  if (nomeRota === "Dashboard") return focused ? "home" : "home-outline";
  if (nomeRota === "Atendimentos") return focused ? "list" : "list-outline";
  return focused ? "bar-chart" : "bar-chart-outline";
}

export function AppTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
        />
    )
}
