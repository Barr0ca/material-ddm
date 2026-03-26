import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
    function Cabecalho() {
        return (
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Desenvolvimento Mobile</Text>
                <Text style={styles.subtitulo}>Encontro 3</Text>
            </View>
        );
    }

    function CardDisciplina() {
        <View style={styles.card}>
            <Text style={styles.cardTitulo}>Ementa da aula</Text>
            <Text>Estrutura de projeto, componentes e JSX</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Cabecalho />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDCDCD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cabecalho: {
        alignItems: "center",
        marginBottom: 8,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 700,
    },
    subtitulo: {
        fontSize: 14,
        color: '#4b5563',
    },
});