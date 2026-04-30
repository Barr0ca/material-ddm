import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../styles";
import { useState } from "react";

type FormData = {
  nome: string;
  telefone: string;
  cpf: string;
  cep: string;
};

type FormErros = Partial<Record<keyof FormData, string>>;

function validar(dados: FormData): FormErros {
    const erros: FormErros = {}
    if (!dados.nome.trim() || dados.nome.trim().length < 3) {
        erros.nome = 'Nome deve ter ao menos 3 caracteres.';
    }

    return erros;
}

export default function Formulario() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    cpf: "",
    telefone: "",
    cep: "",
  });

  const [erros, setErros] = useState<FormErros>({});


  function atualizarCampo(campo: keyof FormData, valor: string) {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  function enviar() {
    const errosEncontrados = validar{form};
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}></Text>

      <TextInput
        style={[styles.input, erros.nome && styles.inputErro]}
        placeholder="Nome Completo"
        value={form.nome}
        onChangeText={(texto) => atualizarCampo("nome", texto)}
      />
      {erros.nome ? <Text style={styles.textoErro}>{erros.nome}</Text> : null}


        <Pressable style={styles.botao} onPress={enviar}>
            <Text style={styles.botaoTexto}>Enviar Cadastro</Text>
        </Pressable>
    </View>
  );
}
