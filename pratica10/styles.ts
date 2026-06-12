import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingTop: 56,
  },
  centralizado: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  titulo: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitulo: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
    marginBottom: 16,
  },
  cardFormulario: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: 12,
    gap: 8,
  },
  label: {
    color: '#334155',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  linhaPrioridades: {
    flexDirection: 'row',
    gap: 8,
  },
  botaoPrioridade: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingVertical: 9,
    alignItems: 'center',
  },
  botaoPrioridadeAtivo: {
    borderColor: '#0f766e',
    backgroundColor: '#ccfbf1',
  },
  textoPrioridade: {
    color: '#475569',
    fontWeight: '600',
  },
  textoPrioridadeAtivo: {
    color: '#0f766e',
  },
  botaoPrincipal: {
    backgroundColor: '#0f766e',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  botaoDesabilitado: {
    opacity: 0.55,
  },
  botaoPrincipalTexto: {
    color: '#ffffff',
    fontWeight: '700',
  },
  cabecalhoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
  contador: {
    color: '#334155',
    fontWeight: '600',
  },
  limparTexto: {
    color: '#dc2626',
    fontWeight: '600',
  },
  listaComponente: {
    flex: 1,
  },
  lista: {
    paddingBottom: 24,
  },
  vazio: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 28,
  },
  item: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 12,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  itemConteudo: {
    flex: 1,
    gap: 4,
  },
  itemTitulo: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '700',
  },
  metadados: {
    color: '#64748b',
    fontSize: 12,
  },
  prioridade: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: '600',
  },
  prioridadeAlta: {
    color: '#991b1b',
    backgroundColor: '#fee2e2',
  },
  prioridadeNormal: {
    color: '#166534',
    backgroundColor: '#dcfce7',
  },
  removerTexto: {
    color: '#dc2626',
    fontWeight: '600',
  },
  feedback: {
    color: '#475569',
  },
  erroTexto: {
    color: '#b91c1c',
    textAlign: 'center',
    lineHeight: 20,
  },
  botaoSecundario: {
    borderWidth: 1,
    borderColor: '#0f766e',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  botaoSecundarioTexto: {
    color: '#0f766e',
    fontWeight: '700',
  },
});