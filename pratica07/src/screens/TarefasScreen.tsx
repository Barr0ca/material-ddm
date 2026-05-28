import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import type { RootTabParamList } from "../navigation/AppTabs";
import { styles } from "../styles";

type Props = BottomTabScreenProps<RootTabParamList, "Tarefas">;

export function TarefasScreen({ navigation, route }: Props) {

  const tarefaId = route.params?.tarefaId;
  const usuario = route.params?.usuario;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas do dia</Text>
      <Text style={styles.subtitulo}>
        Tarefa de { usuario }.
      </Text>

      <Pressable
        style={styles.botaoPrimario}
        onPress={() =>
          navigation.navigate("Tarefas", {
            tarefaId: "TF-101",
            usuario: 'Ian',
          })
        }
      >
        <Text style={styles.botaoPrimarioTexto}>Ver Resumo</Text>
      </Pressable>
    </View>
  );
}
