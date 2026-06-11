import { useState } from "react";
import { styles } from "./styles";
import { Alert, View } from "react-native";

type Rascunho = {
  id: string;
  titulo: string;
};

export default function App() {
  const [titule, setTitulo] = useState("");
  const [rascunhos, setRascunhos] = useState<Rascunho[]>([]);

  function adicionarRascunho() {
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      Alert.alert("Atenção", "Digite um título para o rascunho.");
      return;
    }

    const novoRascunho: Rascunho = {
      id: `${Date.now()}`,
      titulo: tituloLimpo,
    };

    setRascunhos((estadoAnterior) => [novoRascunho, ...estadoAnterior]);
    setTitulo("");
  }

  function removerRascunho(id: string) {
    setRascunhos((estadoAnterior) =>
      estadoAnterior.filter((item) => item.id != id),
    );
  }

  return <View style={styles.container}>
    
  </View>;
}
