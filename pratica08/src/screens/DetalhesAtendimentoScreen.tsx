import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AtendimentosStackParamList } from '../navigation/AtendimentosStack';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

type Props = NativeStackScreenProps<AtendimentosStackParamList, 'DetalhesAtendimento'>;

export function DetalhesAtendimento({ navigation, route }: Props) {

  const { chamadoId, cliente, prioridade } = route.params;

  const [tecnico, setTecnico] = useState('');
  const [status, setStatus] = useState('pendente');
  const [errorMessage, setErrorMessage] = useState('');

  const statusNormalizado = status.toLowerCase().trim();

  function validar() {
    if (!tecnico.trim()) {
      setErrorMessage('Informe o nome do técnico.');
      return false;
    }
    if (statusNormalizado !== 'concluido' && statusNormalizado !== 'pendente') {
      setErrorMessage('Informe o status do atendimento: "concluido" ou "pendente".');
      return false;
    }
    setErrorMessage('');
    return true;
  }

  function finalizarAtendimento() {
    if (!validar()) return;
    navigation.navigate('FinalizacaoAtendimento', { chamadoId: chamadoId, tecnico: tecnico, status: statusNormalizado as 'concluido' | 'pendente'});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atendimentos de {cliente}; Chamado: {chamadoId}; Prioridade: {prioridade}</Text>
      <Text style={styles.subtitulo}>
        Esta aba representa um fluxo recorrente de trabalho de campo.
      </Text>

      {errorMessage ? <Text style={styles.textoErro}>{errorMessage}</Text> : null}

      <TextInput style={styles.input} placeholder="Nome do técnico" value={tecnico} onChangeText={setTecnico} placeholderTextColor={"#666666"}/>
      <TextInput style={styles.input} placeholder="Status do atendimento" value={status} onChangeText={setStatus} placeholderTextColor={"#666666"}/>

      <Pressable style={styles.botaoPrimario} onPress={finalizarAtendimento}>
        <Text style={styles.botaoPrimarioTexto}>Finalizar Atendimento</Text>
      </Pressable>

      <Pressable style={styles.botaoSecundario} onPress={() => navigation.setParams({ prioridade: 'alta' })}>
        <Text style={styles.botaoSecundarioTexto}>Definir como prioridade Alta</Text>
      </Pressable>
      <Pressable style={styles.botaoSecundario} onPress={() => navigation.push('DetalhesAtendimento', { chamadoId: chamadoId, cliente: cliente})}>
        <Text style={styles.botaoSecundarioTexto}>Abrir outro detalhe de atendimento</Text>
      </Pressable>
    </View>
  );
}