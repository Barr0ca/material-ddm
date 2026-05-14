import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import type { RootStackParamList } from "../navigation/AppStack";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Conclusao">;

export function ConclusaoScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atendimento registrado</Text>
      <Text style={styles.subtitulo}>
        O atendimento foi registrado com sucesso. Você pode retornar ao início para
        iniciar novo fluxo.
      </Text>

      <Pressable
        style={styles.botaoPrimario}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.botaoPrimarioTexto}>Voltar ao início</Text>
      </Pressable>
    </View>
  );
}
