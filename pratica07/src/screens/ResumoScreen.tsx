import { Text, View } from 'react-native';
import { styles } from '../styles';

export function ResumoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo</Text>
      <Text style={styles.subtitulo}>
        Nesta área você pode consolidar números e evolução semanal.
      </Text>
    </View>
  );
}