import { View,Text,FlatList,TouchableOpacity,StyleSheet } from 'react-native';

export default function HomeScreen({ products, onSelectProduct }) {
  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.75}
      onPress={() => onSelectProduct(item)}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.ratingBadge}>★ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingBadge: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B45309',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
});
