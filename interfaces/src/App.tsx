import { StyleSheet, View, TextInput, Text, Pressable, Alert } from "react-native";
import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  turma: string;
};

type FormErrors = {
  nome?: string;
  email?: string;
  turma?: string;
};

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim()) {
    erros.nome = "O nome é obrigatório.";
  } else if (dados.nome.trim().length < 3) {
    erros.nome = "O nome tem que ter pelo menos 3 caracteres.";
  }

  if (!dados.email.includes("@") || !dados.email.includes(".")) {
    erros.email = "Email inválido.";
  }

  if (!dados.turma.trim()) {
    erros.turma = "Turma é obrigatória.";
  }

  return erros;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    turma: "",
  });

  const [erros, setErros] = useState<FormErrors>({});

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  function enviar() {
    const errosEncontrados = validar(form);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    Alert.alert("Cadastro realizado", `Aluno: ${form.nome}`);

    setForm({ nome: "", email: "", turma: "" });
    setErros({});
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Painel da Turma</Text>
        <Text style={styles.subtitulo}>
          Encontro 06 ° Intefaces e Formulário
        </Text>
      </View>

      <View>
        <Text style={styles.tituloForm}>Formulário de Inscrição</Text>

        <TextInput
          style={[styles.input, erros.nome && styles.inputErro]}
          placeholder="Digite seu nome..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={form.nome}
          onChangeText={(valor) => atualizarCampo("nome", valor)}
        />

        {erros.nome && <Text style={styles.textoErro}>{erros.nome}</Text>}

        <TextInput
          style={[styles.input, erros.email && styles.inputErro]}
          placeholder="Digite seu email..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(valor) => atualizarCampo("email", valor)}
        />

        {erros.email && <Text style={styles.textoErro}>{erros.email}</Text>}

        <TextInput
          style={[styles.input, erros.turma && styles.inputErro]}
          placeholder="Digite sua turma..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={form.turma}
          onChangeText={(valor) => atualizarCampo("turma", valor)}
        />

        {erros.turma && <Text style={styles.textoErro}>{erros.turma}</Text>}

        <Pressable style={styles.botao} onPress={enviar}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
    gap: 12,
    backgroundColor: "#6f85ffff",
  },
  cabecalho: {
    backgroundColor: "#0033c0ff",
    borderRadius: 12,
    padding: 16,
    gap: 4,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
  subtitulo: {
    fontSize: 13,
    color: "#cbcbcb",
  },
  tituloForm: {
    fontSize: 20,
    fontWeight: 700,
    color: "#000000ff",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    margin: 5,
  },
  inputErro: {
    borderColor: "#dc2626",
  },
  textoErro: {
    color: "#dc2626",
    marginBottom: 2,
    fontSize: 12,
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#0033c0ff",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: 700,
  },
});
