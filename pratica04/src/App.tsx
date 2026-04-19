import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type FormData = {
  nome: string;
  email: string;
  tema: string;
  vagas: string;
};

type FormErrors = {
  nome?: string;
  email?: string;
  tema?: string;
  vagas?: string;
};

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim()) {
    erros.nome = "Informe o nome.";
  } else if (dados.nome.trim().length < 3) {
    erros.nome = "Nome deve ter ao menos 3 caracteres.";
  }

  if (!dados.email.trim()) {
    erros.email = "Informe o email.";
  } else if (!dados.email.includes("@") || !dados.email.includes(".")) {
    erros.email = "Informe um e-mail válido.";
  }

  if (!dados.tema.trim()) {
    erros.tema = "Informe o tema.";
  } else if (dados.tema.trim().length < 3) {
    erros.tema = "Tema deve ter ao menos 3 caracteres.";
  }

  const vagasNumero = Number(dados.vagas);
  if (!dados.vagas || Number.isNaN(vagasNumero) || vagasNumero <= 0) {
    erros.vagas = "Informe um número de vagas maior que zero.";
  }

  return erros;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    tema: "",
    vagas: "",
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

    Alert.alert("Cadastro realizado com sucesso!", `Tema: ${form.tema}\nVagas: ${form.vagas}`);

    setForm({ nome: "", email: "", tema: "", vagas: "" });
    setErros({});
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.tituloForm}>
          Cadastro de Participação em Oficina
        </Text>

        <TextInput
          value={form.nome}
          style={[styles.input, erros.nome && styles.inputErro]}
          placeholder="Nome..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={(valor) => atualizarCampo("nome", valor)}
        />
        {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}

        <TextInput
          value={form.email}
          style={[styles.input, erros.email && styles.inputErro]}
          placeholder="Email..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(valor) => atualizarCampo("email", valor)}
        />
        {erros.email ? (
          <Text style={styles.textoErro}>{erros.email}</Text>
        ) : null}

        <TextInput
          value={form.tema}
          style={[styles.input, erros.tema && styles.inputErro]}
          placeholder="Tema..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          onChangeText={(valor) => atualizarCampo("tema", valor)}
        />
        {erros.tema ? <Text style={styles.textoErro}>{erros.tema}</Text> : null}

        <TextInput
          value={form.vagas}
          style={[styles.input, erros.vagas && styles.inputErro]}
          placeholder="Vagas..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          keyboardType="numeric"
          onChangeText={(valor) => atualizarCampo("vagas", valor)}
        />
        {erros.vagas ? (
          <Text style={styles.textoErro}>{erros.vagas}</Text>
        ) : null}

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
    backgroundColor: "#878286",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#88b6a3",
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
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
    marginLeft: 5,
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#e2c18d",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: 700,
  },
  tituloForm: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
  },
});
