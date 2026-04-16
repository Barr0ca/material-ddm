import { StyleSheet, View, TextInput, Text } from "react-native";
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
          style={styles.input}
          placeholder="Digite seu nome..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={form.nome}
          onChangeText={(valor) => atualizarCampo("nome", valor)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu email..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={form.email}
          onChangeText={(valor) => atualizarCampo("email", valor)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua turma..."
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={form.turma}
          onChangeText={(valor) => atualizarCampo("turma", valor)}
        />

        <Text>Nome: {form.nome}</Text>
        <Text>Email: {form.email}</Text>
        <Text>Turma: {form.turma}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
    gap: 12,
    backgroundColor: "#6f85ffff",
  },
  cabecalho: {
    backgroundColor: "#090909",
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    margin: 5,
  },
});
