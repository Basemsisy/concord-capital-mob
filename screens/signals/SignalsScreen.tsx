import { StyleSheet, Text, View } from 'react-native';

export function SignalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
});

