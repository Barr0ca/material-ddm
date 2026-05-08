import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import type { RootStackParamList } from "../navigation/AppStack";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Inicio">;

export function InicioScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fluxo de Atendimento</Text>
      <Text style={styles.subtitulo}>
        Use o fluxo abaixo para abrir cadastro, confirmar envio e voltar ao
        início.
      </Text>

      <Pressable
        style={styles.botaoPrimario}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.botaoPrimarioTexto}>Ir para cadastro</Text>
      </Pressable>

      <Pressable
        style={styles.botaoSecundario}
        onPress={() => navigation.push("Cadastro")}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Empilhar outro cadastro (push)
        </Text>
      </Pressable>
    </View>
  );
}
