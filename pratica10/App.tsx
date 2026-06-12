import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  carregarRascunhos,
  removerTodosRascunhos,
  salvarRascunhos,
} from './src/storage/rascunhosStorage';
import type {
  Prioridade,
  Rascunho,
} from './src/types';
import { styles } from './styles';

type EstadoTela = 'carregando' | 'pronto' | 'erro';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [prioridade, setPrioridade] =
    useState<Prioridade>('normal');
  const [rascunhos, setRascunhos] =
    useState<Rascunho[]>([]);
  const [estadoTela, setEstadoTela] =
    useState<EstadoTela>('carregando');
  const [salvando, setSalvando] = useState(false);

  const carregarDados = useCallback(async () => {
    setEstadoTela('carregando');

    try {
      const dadosSalvos = await carregarRascunhos();
      setRascunhos(dadosSalvos);
      setEstadoTela('pronto');
    } catch (erro) {
      console.error('Erro ao carregar rascunhos:', erro);
      setEstadoTela('erro');
    }
  }, []);

  useEffect(() => {
    void carregarDados();
  }, [carregarDados]);

  async function persistirNovaLista(
    novaLista: Rascunho[]
  ): Promise<boolean> {
    setSalvando(true);

    try {
      await salvarRascunhos(novaLista);
      setRascunhos(novaLista);
      return true;
    } catch (erro) {
      console.error('Erro ao salvar rascunhos:', erro);
      Alert.alert(
        'Erro',
        'Não foi possível salvar os rascunhos.'
      );
      return false;
    } finally {
      setSalvando(false);
    }
  }

  async function adicionarRascunho() {
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      Alert.alert(
        'Atenção',
        'Digite um título para o rascunho.'
      );
      return;
    }

    const novoRascunho: Rascunho = {
      id: `${Date.now()}`,
      titulo: tituloLimpo,
      prioridade,
      atualizadoEm: new Date().toISOString(),
    };

    const salvo = await persistirNovaLista([
      novoRascunho,
      ...rascunhos,
    ]);

    if (salvo) {
      setTitulo('');
      setPrioridade('normal');
    }
  }

  async function removerRascunho(id: string) {
    const novaLista = rascunhos.filter(
      (item) => item.id !== id
    );

    await persistirNovaLista(novaLista);
  }

  function solicitarRemocao(id: string) {
    Alert.alert(
      'Remover rascunho',
      'Deseja remover este item?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            void removerRascunho(id);
          },
        },
      ]
    );
  }

  async function apagarTodos() {
    setSalvando(true);

    try {
      await removerTodosRascunhos();
      setRascunhos([]);
    } catch (erro) {
      console.error('Erro ao apagar rascunhos:', erro);
      Alert.alert(
        'Erro',
        'Não foi possível apagar os rascunhos.'
      );
    } finally {
      setSalvando(false);
    }
  }

  function solicitarLimpeza() {
    Alert.alert(
      'Apagar todos',
      'Esta ação removerá todos os rascunhos salvos.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: () => {
            void apagarTodos();
          },
        },
      ]
    );
  }

  if (estadoTela === 'carregando') {
    return (
      <View style={[styles.container, styles.centralizado]}>
        <ActivityIndicator size="large" color="#0f766e" />
        <Text style={styles.feedback}>
          Carregando rascunhos...
        </Text>
      </View>
    );
  }

  if (estadoTela === 'erro') {
    return (
      <View style={[styles.container, styles.centralizado]}>
        <Text style={styles.erroTexto}>
          Não foi possível carregar os dados locais.
        </Text>

        <Pressable
          style={styles.botaoSecundario}
          onPress={() => {
            void carregarDados();
          }}
        >
          <Text style={styles.botaoSecundarioTexto}>
            Tentar novamente
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Rascunhos de Atendimento
      </Text>
      <Text style={styles.subtitulo}>
        Os itens permanecem disponíveis após reiniciar o app.
      </Text>

      <View style={styles.cardFormulario}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Título do rascunho"
          value={titulo}
          onChangeText={setTitulo}
          editable={!salvando}
        />

        <Text style={styles.label}>Prioridade</Text>
        <View style={styles.linhaPrioridades}>
          <Pressable
            style={[
              styles.botaoPrioridade,
              prioridade === 'normal' &&
                styles.botaoPrioridadeAtivo,
            ]}
            onPress={() => setPrioridade('normal')}
            disabled={salvando}
          >
            <Text
              style={[
                styles.textoPrioridade,
                prioridade === 'normal' &&
                  styles.textoPrioridadeAtivo,
              ]}
            >
              Normal
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.botaoPrioridade,
              prioridade === 'alta' &&
                styles.botaoPrioridadeAtivo,
            ]}
            onPress={() => setPrioridade('alta')}
            disabled={salvando}
          >
            <Text
              style={[
                styles.textoPrioridade,
                prioridade === 'alta' &&
                  styles.textoPrioridadeAtivo,
              ]}
            >
              Alta
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={[
            styles.botaoPrincipal,
            salvando && styles.botaoDesabilitado,
          ]}
          onPress={() => {
            void adicionarRascunho();
          }}
          disabled={salvando}
        >
          <Text style={styles.botaoPrincipalTexto}>
            {salvando ? 'Salvando...' : 'Adicionar rascunho'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.cabecalhoLista}>
        <Text style={styles.contador}>
          {rascunhos.length} rascunho(s) salvo(s)
        </Text>

        {rascunhos.length > 0 && (
          <Pressable
            onPress={solicitarLimpeza}
            disabled={salvando}
          >
            <Text style={styles.limparTexto}>
              Apagar todos
            </Text>
          </Pressable>
        )}
      </View>

      <FlatList
        style={styles.listaComponente}
        contentContainerStyle={styles.lista}
        data={rascunhos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum rascunho salvo.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemConteudo}>
              <Text style={styles.itemTitulo}>
                {item.titulo}
              </Text>
              <Text style={styles.metadados}>
                Atualizado em{' '}
                {new Date(item.atualizadoEm).toLocaleString(
                  'pt-BR'
                )}
              </Text>
              <Text
                style={[
                  styles.prioridade,
                  item.prioridade === 'alta'
                    ? styles.prioridadeAlta
                    : styles.prioridadeNormal,
                ]}
              >
                Prioridade {item.prioridade}
              </Text>
            </View>

            <Pressable
              onPress={() => solicitarRemocao(item.id)}
              disabled={salvando}
            >
              <Text style={styles.removerTexto}>
                Remover
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}