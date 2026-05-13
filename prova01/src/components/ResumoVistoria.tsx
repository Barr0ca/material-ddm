import { ScrollView, StyleSheet, Text, View } from "react-native";

type ResumoVistoriaProps = {
  responsavel: string;
  email: string;
  codigoPedido: string;
  quantidadeVolumes: string;
  observacao: string;
};

export default function ResumoVistoria({
  responsavel,
  email,
  codigoPedido,
  quantidadeVolumes,
  observacao,
}: ResumoVistoriaProps) {
  return (
    <View style={styles.resumo}>
      <Text style={styles.titulo}>Resumo da Vistoria</Text>
      <Text style={styles.texto}>Nome: {responsavel}</Text>
      <Text style={styles.texto}>E-mail: {email}</Text>
      <Text style={styles.texto}>Código: {codigoPedido}</Text>
      <Text style={styles.texto}>Volum.: {quantidadeVolumes}</Text>
      <Text style={styles.texto}>Obser.:</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.texto}>{observacao}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  resumo: {
    backgroundColor: "#88b6a3",
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    gap: 8,
  },
  texto: {
    fontSize: 16,
    fontWeight: 500,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },
  scroll: {
    maxHeight: 40,
  },
});
