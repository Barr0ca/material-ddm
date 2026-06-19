import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from "./styles";

import {
  atualizarEquipamento,
  criarEquipamento,
  Equipamento,
  EquipamentoStatus,
  listarEquipamentos,
  prepararDadosIniciais,
  removerEquipamento,
} from "./src/database/equipamentosRepository";

const statusLabel: Record<Equipamento["status"], string> = {
  ativo: "Ativo",
  manutencao: "Manutencao",
  inativo: "Inativo",
};

const statusOptions: EquipamentoStatus[] = ["ativo", "inativo", "manutencao"];

export default function App() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");
  const [status, setStatus] = useState<EquipamentoStatus>("ativo");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [salvando, setSalvando] = useState(false);

  const carregarEquipamentos = useCallback(async () => {
    try {
      setErro("");
      setCarregando(true);

      await prepararDadosIniciais();

      const lista = await listarEquipamentos();
      setEquipamentos(lista);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel carregar o inventario local.");
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarEquipamentos();
  }, [carregarEquipamentos]);

  function limparFormulario() {
    (setNome(""), setSetor(""), setStatus("ativo"), setEditandoId(null));
  }

  async function salvarEquipamento() {
    const nomeLimpo = nome.trim();
    const setorLimpo = setor.trim();

    if (!nomeLimpo || !setorLimpo) {
      Alert.alert("Atenção", "Informe nome e setor do equipamento.");
      return;
    }

    try {
      setSalvando(true);
      setErro("");

      if (editandoId === null) {
        await criarEquipamento({
          nome: nomeLimpo,
          setor: setorLimpo,
          status,
        });
      } else {
        await atualizarEquipamento(editandoId, {
          nome: nomeLimpo,
          setor: setorLimpo,
          status,
        });
      }

      limparFormulario();
      const lista = await listarEquipamentos();
      setEquipamentos(lista);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel salvar o equipamento.");
    } finally {
      setSalvando(false);
    }
  }

  function iniciarEdicao(equipamento: Equipamento) {
    setNome(equipamento.nome);
    setSetor(equipamento.setor);
    setStatus(equipamento.status);
    setEditandoId(equipamento.id);
  }

  function confirmarRemocao(equipamento: Equipamento) {
    Alert.alert(
      "Remover equipamento",
      `Deseja remover "${equipamento.nome}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => excluirEquipamento(equipamento.id),
        },
      ],
    );
  }

  async function excluirEquipamento(id: number) {
    try {
      setSalvando(true);
      setErro("");

      await removerEquipamento(id);

      if (editandoId === id) {
        limparFormulario();
      }

      const lista = await listarEquipamentos();
      setEquipamentos(lista);
    } catch (error) {
      console.error(error);
      setErro("Nao foi possivel remover o equipamento.");
    } finally {
      setSalvando(false);
    }
  }

  const textoBotao = editandoId === null ? "Cadastrar" : "Salvar edição";

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inventario Local</Text>
      <Text style={styles.subtitulo}>
        CRUD com SQLite e camada de repositorio
      </Text>

      <View style={styles.formulario}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Tablet Samsung"
          value={nome}
          onChangeText={setNome}
          editable={!salvando}
        />

        <Text style={styles.label}>Setor</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Laboratorio 2"
          value={setor}
          onChangeText={setSetor}
          editable={!salvando}
        />

        <Text style={styles.label}>Status</Text>
        <View style={styles.statusLinha}>
          {statusOptions.map((opcao) => (
            <Pressable
              key={opcao}
              style={[
                styles.statusOpcao,
                status === opcao && styles.statusOpcaoAtiva,
              ]}
              onPress={() => setStatus(opcao)}
              disabled={salvando}
            >
              <Text
                style={[
                  styles.statusOpcaoTexto,
                  status === opcao && styles.statusOpcaoTextoAtivo,
                ]}
              >
                {statusLabel[opcao]}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.acoesFormulario}>
          <Pressable
            style={[styles.botaoPrimario, salvando && styles.botaoDesabilitado]}
            onPress={salvarEquipamento}
            disabled={salvando}
          >
            <Text style={styles.botaoPrimarioTexto}>
              {salvando ? "Salvando..." : textoBotao}
            </Text>
          </Pressable>

          {editandoId !== null ? (
            <Pressable
              style={styles.botaoSecundario}
              onPress={limparFormulario}
              disabled={salvando}
            >
              <Text style={styles.botaoSecundarioTexto}>Cancelar</Text>
            </Pressable>
          ) : null}
        </View>
      </View>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      {carregando ? (
        <View style={styles.carregando}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={styles.carregandoTexto}>Carregando banco local...</Text>
        </View>
      ) : (
        <FlatList
          data={equipamentos}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.lista}
          ListEmptyComponent={
            <Text style={styles.listaVazia}>
              Nenhum equipamento cadastrado.
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardCabecalho}>
                <Text style={styles.cardTitulo}>{item.nome}</Text>
                <Text style={styles.statusTag}>{statusLabel[item.status]}</Text>
              </View>

              <Text style={styles.cardTexto}>Setor: {item.setor}</Text>
              <Text style={styles.cardData}>
                Criado em: {new Date(item.criadoEm).toLocaleString()}
              </Text>

              <View style={styles.cardAcoes}>
                <Pressable
                  style={styles.botaoLista}
                  onPress={() => iniciarEdicao(item)}
                  disabled={salvando}
                >
                  <Text style={styles.botaoListaTexto}>Editar</Text>
                </Pressable>

                <Pressable
                  style={[styles.botaoLista, styles.botaoRemover]}
                  onPress={() => confirmarRemocao(item)}
                  disabled={salvando}
                >
                  <Text
                    style={[styles.botaoListaTexto, styles.botaoRemoverTexto]}
                  >
                    Remover
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
