import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CadastroScreen } from "../screens/CadastroScreen";
import { ConfirmacaoScreen } from "../screens/ConfirmacaoScreen";
import { InicioScreen } from "../screens/InicioScreen";

export type RootStackParamList = {
  Inicio: undefined;
  Cadastro: undefined;
  Confirmacao: undefined;
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
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: "Nova Visita" }}
        />
        <Stack.Screen
          name="Confirmacao"
          component={ConfirmacaoScreen}
          options={{ title: "Confirmação", headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
