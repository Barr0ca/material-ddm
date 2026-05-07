import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { styles } from "../styles";
import { useState } from "react";
import {
  apenasDigitos,
  formatarCEP,
  formatarCPF,
  formatarTelefone,
} from "../validators/Mascaras";

type FormData = {
  nome: string;
  telefone: string;
  cpf: string;
  cep: string;
  curso: string;
};

type FormErros = Partial<Record<keyof FormData, string>>;

function validar(dados: FormData): FormErros {
  const erros: FormErros = {};

  if (!dados.nome.trim() || dados.nome.trim().length < 3) {
    erros.nome = "Nome deve ter ao menos 3 caracteres.";
  }

  if (!dados.curso.trim() || dados.curso.trim().length < 3) {
    erros.curso = "Curso deve ter ao menos 3 caracteres.";
  }

  if (dados.cpf.length !== 11) {
    erros.cpf = "CPF deve conter 11 dígitos.";
  }

  if (dados.telefone.length < 10 || dados.telefone.length > 11) {
    erros.telefone = "Telefone deve ter 10 ou 11 dígitos.";
  }

  if (dados.cep.length !== 8) {
    erros.cep = "CEP deve conter 8 dígitos.";
  }

  return erros;
}

export default function Formulario() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    cpf: "",
    telefone: "",
    cep: "",
    curso: "",
  });

  const [erros, setErros] = useState<FormErros>({});

  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  function enviar() {
    const errosEncontrados = validar(form);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) return;

    Alert.alert("Cadastro concluído", `Participante: ${form.nome}`);
    setForm({ nome: "", cpf: "", telefone: "", cep: "", curso: "" });
    setErros({});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Máscaras</Text>

      <TextInput
        style={[styles.input, erros.nome && styles.inputErro]}
        placeholder="Nome Completo"
        value={form.nome}
        onChangeText={(texto) => atualizarCampo("nome", texto)}
      />
      {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}

      <TextInput
        style={[styles.input, erros.cpf && styles.inputErro]}
        placeholder="CPF"
        keyboardType="numeric"
        maxLength={14}
        value={formatarCPF(form.cpf)}
        onChangeText={(texto) => atualizarCampo("cpf", apenasDigitos(texto))}
      />
      {erros.cpf ? <Text style={styles.textoErro}>{erros.cpf}</Text> : null}

      <TextInput
        style={[styles.input, erros.telefone && styles.inputErro]}
        placeholder="Telefone"
        keyboardType="phone-pad"
        maxLength={15}
        value={formatarTelefone(form.telefone)}
        onChangeText={(texto) =>
          atualizarCampo("telefone", apenasDigitos(texto))
        }
      />
      {erros.telefone ? (
        <Text style={styles.textoErro}>{erros.telefone}</Text>
      ) : null}

      <TextInput
        style={[styles.input, erros.cep && styles.inputErro]}
        placeholder="CEP"
        keyboardType="numeric"
        maxLength={9}
        value={formatarCEP(form.cep)}
        onChangeText={(texto) => atualizarCampo("cep", apenasDigitos(texto))}
      />
      {erros.cep ? <Text style={styles.textoErro}>{erros.cep}</Text> : null}

      <TextInput
        style={[styles.input, erros.curso && styles.inputErro]}
        placeholder="Curso"
        value={form.curso}
        onChangeText={(texto) => atualizarCampo("curso", texto)}
      />
      {erros.curso ? <Text style={styles.textoErro}>{erros.curso}</Text> : null}

      <Pressable style={styles.botao} onPress={enviar}>
        <Text style={styles.botaoTexto}>Enviar Cadastro</Text>
      </Pressable>
    </View>
  );
}
