import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    paddingTop: 56,
    gap: 10,
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  botao: {
    backgroundColor: '#0f766e',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: '700',
  },
  contador: {
    color: '#334155',
    fontWeight: '600',
    marginTop: 8,
  },
  vazio: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 24,
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
  itemTexto: {
    flex: 1,
    color: '#0f172a',
  },
  removerTexto: {
    color: '#dc2626',
    fontWeight: '600',
  },
});