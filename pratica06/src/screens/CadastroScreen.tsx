import { Alert, Pressable, Text, TextInput, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppStack";
import { useState } from "react";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Cadastro">;

export function CadastroScreen({ navigation }: Props) {
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");

  function salvar() {
    if (!nome.trim() || !setor.trim()) {
      Alert.alert("Atenção", "Preencha nome e setor para continuar.");
      return;
    }
    navigation.replace("Confirmacao");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nova Visita</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do visitante"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Setor de destino"
        value={setor}
        onChangeText={(setor) => setSetor(setor)}
      />

      <Pressable onPress={salvar} style={styles.botaoPrimario}>
        <Text style={styles.botaoPrimarioTexto}>Salvar visita</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.botaoSecundario}
      >
        <Text style={styles.botaoSecundarioTexto}>Voltar sem salvar</Text>
      </Pressable>
    </View>
  );
}
