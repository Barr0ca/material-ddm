import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

import {
  Equipamento,
  listarEquipamentos,
  prepararDadosIniciais,
} from './src/database/equipamentosRepository';

const statusLabel: Record<Equipamento['status'], string> = {
  ativo: 'Ativo',
  manutencao: 'Manutencao',
  inativo: 'Inativo',
};

export default function App() {
  const [equipamentos, setEquipamentos] = useState<
    Equipamento[]
  >([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  const carregarEquipamentos = useCallback(async () => {
    try {
      setErro('');
      setCarregando(true);

      await prepararDadosIniciais();

      const lista = await listarEquipamentos();
      setEquipamentos(lista);
    } catch (error) {
      console.error(error);
      setErro(
        'Nao foi possivel carregar o inventario local.'
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarEquipamentos();
  }, [carregarEquipamentos]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inventario Local</Text>
      <Text style={styles.subtitulo}>
        Dados persistidos em SQLite no dispositivo
      </Text>

      {erro ? (
        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>{erro}</Text>
          <Pressable
            style={styles.botaoSecundario}
            onPress={carregarEquipamentos}
          >
            <Text style={styles.botaoSecundarioTexto}>
              Tentar novamente
            </Text>
          </Pressable>
        </View>
      ) : null}

      {carregando ? (
        <View style={styles.carregando}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={styles.carregandoTexto}>
            Carregando banco local...
          </Text>
        </View>
      ) : (
        <FlatList
          data={equipamentos}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.lista}
          ListEmptyComponent={
            <Text style={styles.listaVazia}>
              Nenhum equipamento encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardCabecalho}>
                <Text style={styles.cardTitulo}>
                  {item.nome}
                </Text>
                <Text
                  style={[
                    styles.status,
                    item.status === 'ativo' &&
                      styles.statusAtivo,
                    item.status === 'manutencao' &&
                      styles.statusManutencao,
                    item.status === 'inativo' &&
                      styles.statusInativo,
                  ]}
                >
                  {statusLabel[item.status]}
                </Text>
              </View>

              <Text style={styles.cardTexto}>
                Setor: {item.setor}
              </Text>
              <Text style={styles.cardData}>
                Criado em:{' '}
                {new Date(item.criadoEm).toLocaleString()}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}