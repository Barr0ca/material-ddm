import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
  },
  subtitulo: {
    marginTop: 6,
    fontSize: 15,
    color: "#475569",
  },
  botaoAtualizar: {
    minHeight: 42,
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  botaoAtualizarTexto: {
    color: "#ffffff",
    fontWeight: "700",
  },
  aviso: {
    marginTop: 18,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#fee2e2",
    borderWidth: 1,
    borderColor: "#fecaca",
  },
  avisoTexto: {
    color: "#991b1b",
  },
  carregando: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  carregandoTexto: {
    color: "#475569",
  },
  lista: {
    paddingTop: 20,
    paddingBottom: 32,
    gap: 12,
  },
  listaVazia: {
    marginTop: 32,
    textAlign: "center",
    color: "#64748b",
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  nome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  empresa: {
    marginTop: 4,
    color: "#475569",
  },
  linha: {
    marginTop: 12,
  },
  rotulo: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
    textTransform: "uppercase",
  },
  valor: {
    marginTop: 2,
    color: "#1e293b",
  },
});
