import { useState } from "react";
import { styles } from "./styles";
import { Alert, FlatList, Pressable, Text, TextInput, View } from "react-native";

type Rascunho = {
  id: string;
  titulo: string;
};

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [rascunhos, setRascunhos] = useState<Rascunho[]>([]);

  function adicionarRascunho() {
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      Alert.alert("Atenção", "Digite um título para o rascunho.");
      return;
    }

    const novoRascunho: Rascunho = {
      id: `${Date.now()}`,
      titulo: tituloLimpo,
    };

    setRascunhos((estadoAnterior) => [novoRascunho, ...estadoAnterior]);
    setTitulo("");
  }

  function removerRascunho(id: string) {
    setRascunhos((estadoAnterior) =>
      estadoAnterior.filter((item) => item.id != id),
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rascunho de Atendimento</Text>
      <Text style={styles.subtitulo}>Adicione itens e depois recarregue o aplicativo.</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Titulo do rascunho"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Pressable style={styles.botao} onPress={adicionarRascunho}>
        <Text style={styles.botaoTexto}>Adicionar Rascunho</Text>
      </Pressable>

      <Text style={styles.contador}>
        {rascunhos.length} rascunho(s) somente em memória
      </Text>

      <FlatList
        data={rascunhos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum rascunho nesta execução.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.titulo}</Text>

            <Pressable onPress={() => removerRascunho(item.id)}>
              <Text style={styles.removerTexto}>Remover</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
