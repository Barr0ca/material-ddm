import { StyleSheet, Text, View } from "react-native";

function Indicador({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <View style={styles.cardIndicador}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardValor}>{valor}</Text>
    </View>
  );
}

function Aviso({ texto }: { texto: string }) {
  return (
    <View style={styles.avisoItem}>
      <Text style={styles.avisoTexto}>{texto}</Text>
    </View>
  );
}

export function StyleBoaPratica() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Painel da Turma</Text>
        <Text style={styles.subtitulo}>Encontro 05 ° Layout e Estilos</Text>
      </View>
      <View style={styles.linhaIndicadores}>
        <Indicador titulo="Presentes" valor="27" />
        <Indicador titulo="Ausentes" valor="3" />
        <Indicador titulo="Atividades" valor="4" />
      </View>
      <View style={styles.listaAvisos}>
        <Text style={styles.secaoTitulo}>Avisos</Text>
        <Aviso texto="Prática 03 será entregue até sexta-feira." />
        <Aviso texto="Revisar materiais do encontro 04." />
        <Aviso texto="Trazer dispositivo para testes presenciais." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cdcdcd",
    padding: 16,
    gap: 12,
    borderRadius: 8
  },
  cabecalho: {
    backgroundColor: "#090909",
    borderRadius: 12,
    padding: 16,
    gap: 4,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff"
  },
  subtitulo: {
    fontSize: 13,
    color: '#cbcbcb',
  },
  linhaIndicadores: {
    flexDirection: 'row',
    gap: 10,
  },
  cardIndicador: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    gap: 4
  },
  cardTitulo: {
    fontSize: 12,
    color: '#555',
  },
  cardValor: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f8f3f',
  },
  listaAvisos: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    gap: 8,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
    marginLeft: 4
  },
  avisoItem: {
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderRadius: 8,
    padding: 10,
  },
  avisoTexto: {
    color: '#3d3d11',
    fontSize: 14,
  },
});
