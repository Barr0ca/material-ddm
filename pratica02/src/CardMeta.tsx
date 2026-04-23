import { Pressable, StyleSheet, Text, View } from "react-native";

type Meta = {
  nomeMeta: string;
};

export function CardMeta({ nomeMeta }: Meta) {
  return (
    <View style={styles.container}>
      <Text style={styles.meta}>{nomeMeta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "15%",
    minWidth: 250,
  },
  meta: {
    fontSize: 16,
    fontWeight: "400",
  },
});
