import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';

export default function ProductScreen({ product, onBack }) {
  if (!product) {
    return null;
  }

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>

      <View style={styles.detailCard}>
        <Text style={styles.detailKey}>Key: {product.key}</Text>
        <Text style={styles.detailTitle}>{product.title}</Text>
        <Text style={styles.detailRating}>Rating: ★ {product.rating} / 5.0</Text>

        <View style={styles.divider} />

        <Text style={styles.detailDescription}>{product.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  detailKey: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 6,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  detailRating: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B45309',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  detailDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
});