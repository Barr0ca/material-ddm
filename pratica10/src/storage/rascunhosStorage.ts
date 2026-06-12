import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Rascunho } from '../types';

const CHAVE_RASCUNHOS = '@central-campo:rascunhos';

type DadosLocais = {
  versao: 1;
  rascunhos: Rascunho[];
};

function ehRascunho(valor: unknown): valor is Rascunho {
  if (typeof valor !== 'object' || valor === null) {
    return false;
  }

  const item = valor as Partial<Rascunho>;

  return (
    typeof item.id === 'string' &&
    typeof item.titulo === 'string' &&
    (item.prioridade === 'normal' ||
      item.prioridade === 'alta') &&
    typeof item.atualizadoEm === 'string'
  );
}

function ehDadosLocais(valor: unknown): valor is DadosLocais {
  if (typeof valor !== 'object' || valor === null) {
    return false;
  }

  const dados = valor as Partial<DadosLocais>;

  return (
    dados.versao === 1 &&
    Array.isArray(dados.rascunhos) &&
    dados.rascunhos.every(ehRascunho)
  );
}

export async function carregarRascunhos(): Promise<Rascunho[]> {
  const texto = await AsyncStorage.getItem(CHAVE_RASCUNHOS);

  if (texto === null) {
    return [];
  }

  const valor: unknown = JSON.parse(texto);

  if (!ehDadosLocais(valor)) {
    throw new Error('Formato local de rascunhos inválido.');
  }

  return valor.rascunhos;
}

export async function salvarRascunhos(
  rascunhos: Rascunho[]
): Promise<void> {
  const dados: DadosLocais = {
    versao: 1,
    rascunhos,
  };

  await AsyncStorage.setItem(
    CHAVE_RASCUNHOS,
    JSON.stringify(dados)
  );
}

export async function removerTodosRascunhos(): Promise<void> {
  await AsyncStorage.removeItem(CHAVE_RASCUNHOS);
}