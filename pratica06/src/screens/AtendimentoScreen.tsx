import { Pressable, Text, TextInput, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppStack";
import { useState } from "react";
import { styles } from "../styles";

type Props = NativeStackScreenProps<RootStackParamList, "Atendimento">;

export function AtendimentoScreen({ navigation }: Props) {
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para registro de erros

  function salvar() {
    if (!nome.trim() || !horario.trim()) {
      setErrorMessage("Preencha nome e horário para continuar.");
      return;
    }
    if (
      horario.slice(0, 2) > "23" ||
      horario.slice(0, 2) < "00" ||
      horario.slice(3, 5) > "59" ||
      horario.slice(3, 5) < "00"
    ) {
      // Validação para horário válido
      setErrorMessage(
        "Horário inválido. Por favor, insira novamente (Horas:Minutos)",
      );
      return;
    }
    setErrorMessage("");
    navigation.replace("Conclusao");
  }

  // Bloco de máscaras (Máscara para formato de horário HH:MM)----------
  function apenasDigitos(valor: string) {
    return valor.replace(/\D/g, "");
  }

  function formatarHorario(valor: string) {
    const digitos = apenasDigitos(valor).slice(0, 4);
    if (digitos.length <= 2) return `${digitos}`;
    if (digitos.length <= 4) {
      return `${digitos.slice(0, 2)}:${digitos.slice(2, 4)}`;
    }
  }
  // -------------------------------------------------------------------

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Atendimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do visitante"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor={"#666666"}
      />

      <TextInput
        style={styles.input}
        placeholder="Horário do atendimento"
        value={formatarHorario(horario)}
        onChangeText={(horario) => setHorario(horario)}
        placeholderTextColor={"#666666"}
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Pressable onPress={salvar} style={styles.botaoPrimario}>
        <Text style={styles.botaoPrimarioTexto}>Salvar atendimento</Text>
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
