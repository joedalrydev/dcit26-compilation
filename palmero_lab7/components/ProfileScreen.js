import {  View,  Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value || 'N/A'}</Text>
    </View>
  );
}

export default function ProfileScreen({ user, onBack }) {
  if (!user) {
    return null;
  }

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const street = `${user.location.street.number} ${user.location.street.name}`;
  const cityRegion = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
  const dob = new Date(user.dob.date).toLocaleDateString();
  const registered = new Date(user.registered.date).toLocaleDateString();

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>

      <View style={styles.heroCard}>
        <Image
          source={{ uri: user.picture.large }}
          style={styles.profileImage}
        />
        <Text style={styles.heroName}>{fullName}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <InfoRow label="Gender" value={user.gender} />
        <InfoRow label="Date of Birth" value={`${dob} (${user.dob.age} yrs)`} />
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Location</Text>
        <InfoRow label="Street" value={street} />
        <InfoRow label="City / State / Country" value={cityRegion} />
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Account</Text>
        <InfoRow label="Email" value={user.email}/>
        <InfoRow label="Registered" value={`${registered} (${user.registered.age} yrs)`} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
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
    color: '#111827',
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 14,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#2563EB',
  },
  heroName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#2563EB',
    marginBottom: 10,
  },
  row: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  rowLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 2,
  },
  rowValue: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },
});