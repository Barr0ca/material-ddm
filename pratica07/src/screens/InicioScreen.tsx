import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../navigation/AppTabs";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";
import { DrawerActions } from "@react-navigation/routers";

type Props = BottomTabScreenProps<RootTabParamList, "Inicio">

export function InicioScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Painel Operacional</Text>
            <Text style={styles.subtitulo}>Use as abas para alternar as áreas principais e abra o menu lateral para configurações.</Text>

            <Pressable style={styles.botaoPrimario} onPress={() => navigation.navigate("Tarefas")}>
                <Text style={styles.botaoPrimarioTexto}>Ir para Tarefas</Text>
            </Pressable>

            <Pressable style={styles.botaoSecundario} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Text style={styles.botaoSecundarioTexto}>Abrir menu lateral</Text>
            </Pressable>

        </View>
    )
}