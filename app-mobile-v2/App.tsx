import { StyleSheet, View, Text } from 'react-native';
import { StyleBoaPratica } from './src/components/StyleBoaPratica';


export default function App() {
  return (
    <View style={styles.container}>
      <StyleBoaPratica />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 12,
    backgroundColor: "#6f85ffff",
  },
});
