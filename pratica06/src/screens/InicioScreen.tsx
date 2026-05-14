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
        Use o fluxo abaixo para abrir um atendimento.
      </Text>

      <Pressable
        style={styles.botaoPrimario}
        onPress={() => navigation.navigate("Atendimento")}
      >
        <Text style={styles.botaoPrimarioTexto}>Ir para Atendimento</Text>
      </Pressable>

    </View>
  );
}
