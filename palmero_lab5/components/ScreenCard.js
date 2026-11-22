import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScreenCard({
  title,
  subtitle,
  iconName,
  buttons = [],
}) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Ionicons name={iconName} size={28} color="#2563EB" />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.buttonGroup}>
        {buttons.map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              btn.variant === 'secondary' && styles.secondaryButton,
              btn.variant === 'outline' && styles.outlineButton,
            ]}
            onPress={btn.onPress}>
            <Text
              style={[
                styles.buttonText,
                btn.variant === 'outline' && styles.outlineButtonText,
              ]}>
              {btn.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonGroup: {
    gap: 10,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#0F766E',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#2563EB',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  outlineButtonText: {
    color: '#2563EB',
  },
});
