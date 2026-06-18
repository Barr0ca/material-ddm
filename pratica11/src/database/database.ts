import * as SQLite from 'expo-sqlite';

let database: SQLite.SQLiteDatabase | null = null;

export async function getDb() {
  if (database) {
    return database;
  }

  database = await SQLite.openDatabaseAsync(
    'inventario.db'
  );

  await database.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS equipamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      setor TEXT NOT NULL,
      status TEXT NOT NULL CHECK (
        status IN ('ativo', 'manutencao', 'inativo')
      ),
      criado_em TEXT NOT NULL
    );
  `);

  return database;
}