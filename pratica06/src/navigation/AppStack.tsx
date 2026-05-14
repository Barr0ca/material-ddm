import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AtendimentoScreen } from "../screens/AtendimentoScreen";
import { ConclusaoScreen } from "../screens/ConclusaoScreen";
import { InicioScreen } from "../screens/InicioScreen";

export type RootStackParamList = {
  Inicio: undefined;
  Atendimento: undefined;
  Conclusao: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: "#0f172a" },
          headerTintColor: "#f8fafc",
          headerTitleStyle: { fontWeight: "700" },
          contentStyle: { backgroundColor: "#f8fafc" },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: "Painel inicial" }}
        />
        <Stack.Screen
          name="Atendimento"
          component={AtendimentoScreen}
          options={{ title: "Nova Visita" }}
        />
        <Stack.Screen
          name="Conclusao"
          component={ConclusaoScreen}
          options={{ title: "Confirmação", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
