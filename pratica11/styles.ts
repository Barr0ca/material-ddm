import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
    paddingTop: 64,
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
  aviso: {
    marginTop: 20,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fee2e2',
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  avisoTexto: {
    color: '#991b1b',
    marginBottom: 10,
  },
  botaoSecundario: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  botaoSecundarioTexto: {
    color: '#991b1b',
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
    paddingTop: 20,
    paddingBottom: 32,
    gap: 12,
  },
  listaVazia: {
    marginTop: 32,
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  cardTitulo: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: '700',
  },
  statusAtivo: {
    color: '#166534',
    backgroundColor: '#dcfce7',
  },
  statusManutencao: {
    color: '#92400e',
    backgroundColor: '#fef3c7',
  },
  statusInativo: {
    color: '#334155',
    backgroundColor: '#e2e8f0',
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
});