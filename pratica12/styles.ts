import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
    paddingTop: 56,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitulo: {
    marginTop: 6,
    fontSize: 15,
    color: '#475569',
  },
  formulario: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  label: {
    marginBottom: 6,
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
  },
  input: {
    minHeight: 46,
    marginBottom: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  statusLinha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  statusOpcao: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#ffffff',
  },
  statusOpcaoAtiva: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  statusOpcaoTexto: {
    color: '#334155',
    fontWeight: '700',
  },
  statusOpcaoTextoAtivo: {
    color: '#ffffff',
  },
  acoesFormulario: {
    flexDirection: 'row',
    gap: 10,
  },
  botaoPrimario: {
    flex: 1,
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  botaoPrimarioTexto: {
    color: '#ffffff',
    fontWeight: '700',
  },
  botaoSecundario: {
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  botaoSecundarioTexto: {
    color: '#334155',
    fontWeight: '700',
  },
  erro: {
    marginTop: 12,
    color: '#b91c1c',
    fontWeight: '700',
  },
  carregando: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  carregandoTexto: {
    color: '#475569',
  },
  lista: {
    paddingTop: 18,
    paddingBottom: 32,
    gap: 12,
  },
  listaVazia: {
    marginTop: 24,
    textAlign: 'center',
    color: '#64748b',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardCabecalho: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTitulo: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
  },
  statusTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: '700',
    color: '#1e3a8a',
    backgroundColor: '#dbeafe',
  },
  cardTexto: {
    marginTop: 10,
    color: '#334155',
  },
  cardData: {
    marginTop: 6,
    fontSize: 12,
    color: '#64748b',
  },
  cardAcoes: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  botaoLista: {
    minHeight: 38,
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#e0f2fe',
  },
  botaoListaTexto: {
    color: '#075985',
    fontWeight: '700',
  },
  botaoRemover: {
    backgroundColor: '#fee2e2',
  },
  botaoRemoverTexto: {
    color: '#991b1b',
  },
});