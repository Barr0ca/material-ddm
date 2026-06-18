import { getDb } from './database';

export type EquipamentoStatus =
  | 'ativo'
  | 'manutencao'
  | 'inativo';

export type Equipamento = {
  id: number;
  nome: string;
  setor: string;
  status: EquipamentoStatus;
  criadoEm: string;
};

type TotalRow = {
  total: number;
};

const equipamentosIniciais = [
  {
    nome: 'Roteador principal',
    setor: 'Laboratorio 1',
    status: 'ativo' as const,
  },
  {
    nome: 'Projetor Epson',
    setor: 'Sala 03',
    status: 'manutencao' as const,
  },
  {
    nome: 'Notebook reserva',
    setor: 'Coordenacao',
    status: 'ativo' as const,
  },
];

export async function prepararDadosIniciais() {
  const db = await getDb();

  const resultado = await db.getFirstAsync<TotalRow>(
    'SELECT COUNT(*) AS total FROM equipamentos'
  );

  if (resultado && resultado.total > 0) {
    return;
  }

  for (const equipamento of equipamentosIniciais) {
    await db.runAsync(
      `
      INSERT INTO equipamentos
        (nome, setor, status, criado_em)
      VALUES
        (?, ?, ?, ?)
      `,
      [
        equipamento.nome,
        equipamento.setor,
        equipamento.status,
        new Date().toISOString(),
      ]
    );
  }
}

export async function listarEquipamentos() {
  const db = await getDb();

  return db.getAllAsync<Equipamento>(`
    SELECT
      id,
      nome,
      setor,
      status,
      criado_em AS criadoEm
    FROM equipamentos
    ORDER BY id DESC
  `);
}