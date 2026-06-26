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
import { Personagem, listarPersonagens } from "./src/services/usuariosApi";

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

        <Pressable
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
        <FlatList
          data={personagens}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.lista}
          ListEmptyComponent={
            <Text style={styles.listaVazia}>Nenhum contato retornado.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.empresa}>{item.estado}</Text>

              <View style={styles.linha}>
                <Text style={styles.rotulo}>Espécie</Text>
                <Text style={styles.valor}>{item.especie}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.rotulo}>Gênero</Text>
                <Text style={styles.valor}>{item.genero}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.rotulo}>Origem</Text>
                <Text style={styles.valor}>{item.origem}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.rotulo}>Localização</Text>
                <Text style={styles.valor}>{item.localizacao}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.rotulo}>Imagem</Text>
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
