export type SituacaoEntrega = "Avaria" | "Integra";

export type FormData = {
  responsavel: string;
  email: string;
  codigoPedido: string;
  quantidadeVolumes: string;
  observacao: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

export type ResumoVistoria = {
  responsavel: string;
  email: string;
  codigoPedido: string;
  bairroEntrega: string;
  quantidadeVolumes: string;
  observacao: string;
  situacao: SituacaoEntrega;
};
