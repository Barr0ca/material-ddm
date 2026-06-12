export type Prioridade = 'normal' | 'alta';

export type Rascunho = {
  id: string;
  titulo: string;
  prioridade: Prioridade;
  atualizadoEm: string;
};

export type DadosLocais = {
  versao: 1;
  rascunhos: Rascunho[];
};