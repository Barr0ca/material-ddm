import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import ResumoVistoria from "./ResumoVistoria";
import { FormData, FormErrors } from "../types";

function validar(dados: FormData): FormErrors {
  const erros: FormErrors = {};

  if (!dados.responsavel.trim()) {
    erros.responsavel = "Informe o responsavel.";
  } else if (dados.responsavel.trim().length < 3) {
    erros.responsavel = "O nome deve ter ao menos 3 caracteres.";
  }

  if (!dados.email.trim()) {
    erros.email = "Informe o email.";
  } else if (!dados.email.includes("@") || !dados.email.includes(".")) {
    erros.email = "Informe um e-mail válido.";
  }

  if (!dados.codigoPedido.trim()) {
    erros.codigoPedido = "Informe o código do pedido.";
  } else if (dados.codigoPedido.trim().length < 5) {
    erros.codigoPedido = "O código deve ter ao menos 5 caracteres.";
  }

  const quantidadeVolumesNumero = Number(dados.quantidadeVolumes);
  if (
    !dados.quantidadeVolumes ||
    Number.isNaN(quantidadeVolumesNumero) ||
    quantidadeVolumesNumero <= 0
  ) {
    erros.quantidadeVolumes = "Informe um número de volumes maior que zero.";
  }

  return erros;
}

export default function Cadastro() {
  const [form, setForm] = useState<FormData>({
    responsavel: "",
    email: "",
    codigoPedido: "",
    quantidadeVolumes: "",
    observacao: "",
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

    Alert.alert(
      "Cadastro realizado com sucesso!",
      `Código: ${form.codigoPedido}\nVolumes: ${form.quantidadeVolumes}\nResponsável: ${form.responsavel}`,
    );

    setForm({
      responsavel: "",
      email: "",
      codigoPedido: "",
      quantidadeVolumes: "",
      observacao: "",
    });
    setErros({});
  }

  function limpar() {
    setForm({
      responsavel: "",
      email: "",
      codigoPedido: "",
      quantidadeVolumes: "",
      observacao: "",
    });

    setErros({
      responsavel: "",
      email: "",
      codigoPedido: "",
      quantidadeVolumes: "",
      observacao: "",
    });
  }
  return (
    <View style={styles.form}>
      <Text style={styles.tituloForm}>Formulário Vistoria</Text>

      <TextInput
        value={form.responsavel}
        style={[styles.input, erros.responsavel && styles.inputErro]}
        placeholder="Responsável..."
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        onChangeText={(valor) => atualizarCampo("responsavel", valor)}
      />
      {erros.responsavel ? (
        <Text style={styles.textoErro}>{erros.responsavel}</Text>
      ) : null}

      <TextInput
        value={form.email}
        style={[styles.input, erros.email && styles.inputErro]}
        placeholder="Email..."
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(valor) => atualizarCampo("email", valor)}
      />
      {erros.email ? <Text style={styles.textoErro}>{erros.email}</Text> : null}

      <TextInput
        value={form.codigoPedido}
        style={[styles.input, erros.codigoPedido && styles.inputErro]}
        placeholder="Código do pedido..."
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        onChangeText={(valor) => atualizarCampo("codigoPedido", valor)}
      />
      {erros.codigoPedido ? (
        <Text style={styles.textoErro}>{erros.codigoPedido}</Text>
      ) : null}

      <TextInput
        value={form.quantidadeVolumes}
        style={[styles.input, erros.quantidadeVolumes && styles.inputErro]}
        placeholder="Quantidade de volumes..."
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        keyboardType="numeric"
        onChangeText={(valor) => atualizarCampo("quantidadeVolumes", valor)}
      />
      {erros.quantidadeVolumes ? (
        <Text style={styles.textoErro}>{erros.quantidadeVolumes}</Text>
      ) : null}

      <TextInput
        value={form.observacao}
        style={[styles.input, erros.observacao && styles.inputErro]}
        placeholder="Observação..."
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        maxLength={150}
        onChangeText={(valor) => atualizarCampo("observacao", valor)}
      />
      {erros.observacao ? (
        <Text style={styles.textoErro}>{erros.observacao}</Text>
      ) : null}

      <ResumoVistoria
        responsavel={form.responsavel}
        email={form.email}
        codigoPedido={form.codigoPedido}
        quantidadeVolumes={form.quantidadeVolumes}
        observacao={form.observacao}
      />

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.textoBotao}>Cadastrar Vistoria</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={limpar}>
        <Text style={styles.textoBotao}>Limpar Cadastro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: "#88b6a3",
    padding: 15,
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
    userSelect: "none",
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
