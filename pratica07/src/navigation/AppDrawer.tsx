import Ionicons from "@react-native-vector-icons/ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppTabs } from "./AppTabs";
import { ConfiguracoesScreen } from "../screens/ConfiguracoesScreen";

export type RootDrawerParamList = {
  PainelInicial: undefined;
  Configuracoes: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="PainelInicial"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#635274" },
        headerTintColor: "#e4f5b1",
        drawerActiveTintColor: "#512b52",
        drawerInactiveTintColor: "#512b52",
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={
              route.name === "PainelInicial"
                ? focused
                  ? "grid"
                  : "grid-outline"
                : focused
                  ? "settings"
                  : "settings-outline"
            }
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="PainelInicial"
        component={AppTabs}
        options={{ title: "Aplicativo", headerShown: false }}
      />
      <Drawer.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{ title: "Configurações" }}
      />
    </Drawer.Navigator>
  );
}
