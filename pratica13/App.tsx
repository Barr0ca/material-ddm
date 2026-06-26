import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import { Personagem, listarPersonagens } from "./src/services/personagensApi";

export default function App() {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const carregarPersonagens = useCallback(async () => {
    try {
      setErro("");
      setCarregando(true);

      const lista = await listarPersonagens();
      setPersonagens(lista);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel carregar os contatos remotos.");
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarPersonagens();
  }, [carregarPersonagens]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View>
          <Text style={styles.titulo}>Mural Remoto</Text>
          <Text style={styles.subtitulo}>Dados remotos em JSON</Text>
        </View>

        <Pressable // Botao para atualizar os dados da API
          style={styles.botaoAtualizar}
          onPress={carregarPersonagens}
          disabled={carregando}
        >
          <Text style={styles.botaoAtualizarTexto}>Atualizar</Text>
        </Pressable>
      </View>

      {erro ? (
        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>{erro}</Text>
        </View>
      ) : null}

      {carregando ? (
        <View style={styles.carregando}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={styles.carregandoTexto}>Buscando dados da API...</Text>
        </View>
      ) : (
        <FlatList // Utilizando o FlatList para exibir a lista de personagens
          data={personagens}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listaPersonagens}
          ListEmptyComponent={
            <Text style={styles.listaPersonagensVazia}>Nenhum contato retornado.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.cardPersonagem}>
              <Text style={styles.nomePersonagem}>{item.nome}</Text>
              <Text style={styles.estadoPersonagem}>{item.estado}</Text>

              <View style={styles.linhaAtributo}>
                <Text style={styles.rotuloAtributo}>Espécie</Text>
                <Text style={styles.valorAtributo}>{item.especie}</Text>
              </View>

              <View style={styles.linhaAtributo}>
                <Text style={styles.rotuloAtributo}>Gênero</Text>
                <Text style={styles.valorAtributo}>{item.genero}</Text>
              </View>

              <View style={styles.linhaAtributo}>
                <Text style={styles.rotuloAtributo}>Origem</Text>
                <Text style={styles.valorAtributo}>{item.origem}</Text>
              </View>

              <View style={styles.linhaAtributo}>
                <Text style={styles.rotuloAtributo}>Localização</Text>
                <Text style={styles.valorAtributo}>{item.localizacao}</Text>
              </View>

              <View style={styles.linhaAtributo}>
                <Text style={styles.rotuloAtributo}>Imagem</Text>
                <Image
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                  source={{ uri: item.imagem }}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
