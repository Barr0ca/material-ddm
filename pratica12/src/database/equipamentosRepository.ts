import { getDb } from "./database";

export type EquipamentoStatus = "ativo" | "manutencao" | "inativo";

export type Equipamento = {
  id: number;
  nome: string;
  setor: string;
  status: EquipamentoStatus;
  criadoEm: string;
};

export type NovoEquipamento = {
  nome: string;
  setor: string;
  status: EquipamentoStatus;
};

export type AtualizarEquipamento = NovoEquipamento;

type TotalRow = {
  total: number;
};

const equipamentosIniciais: NovoEquipamento[] = [
  {
    nome: "Roteador principal",
    setor: "Laboratorio 1",
    status: "ativo",
  },
  {
    nome: "Projetor Epson",
    setor: "Sala 03",
    status: "manutencao",
  },
  {
    nome: "Notebook reserva",
    setor: "Coordenacao",
    status: "ativo",
  },
];

export async function prepararDadosIniciais() {
  const db = await getDb();

  const resultado = await db.getFirstAsync<TotalRow>(
    "SELECT COUNT(*) AS total FROM equipamentos",
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
      ],
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

export async function criarEquipamento(equipamento: NovoEquipamento) {
  const db = await getDb();

  const resultado = await db.runAsync(
    `
    INSERT INTO equipamentos
      (nome, setor, status, criado_em)
    VALUES
      (?, ?, ?, ?)
    `,
    [
      equipamento.nome.trim(),
      equipamento.setor.trim(),
      equipamento.status,
      new Date().toISOString(),
    ],
  );

  return resultado.lastInsertRowId;
}

export async function atualizarEquipamento(
  id: number,
  equipamento: AtualizarEquipamento,
) {
  const db = await getDb();

  const resultado = await db.runAsync(
    `
    UPDATE equipamentos
    SET
      nome = ?,
      setor = ?,
      status = ?
    WHERE id = ?
    `,
    [equipamento.nome.trim(), equipamento.setor.trim(), equipamento.status, id],
  );

  if (resultado.changes === 0) {
    throw new Error("Equipamento nao encontrado.");
  }
}

export async function removerEquipamento(id: number) {
  const db = await getDb();

  const resultado = await db.runAsync(
    `
    DELETE equipamentos
    WHERE id = ?
    `,
    [id],
  );

  if (resultado.changes === 0) {
    throw new Error("Equipamento nao encontrado.");
  }
}
