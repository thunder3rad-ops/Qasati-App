import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ChildrenScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => router.push('/child/add')}
        >
          <Ionicons name="add" size={22} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>الأطفال</Text>
      </View>

      <View style={styles.empty}>
        <Ionicons name="people" size={80} color="#999" />
        <Text style={styles.emptyText}>لا يوجد أطفال مضافون حالياً</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: '#047857',
    padding: 12,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
  },
});
