import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default function HomeScreen({
  user,
  loading,
  error,
  onFetchUser,
  onOpenProfile,
}) {
  const fullName = user
    ? `${user.name.title} ${user.name.first} ${user.name.last}`
    : '';

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        {loading ? (
          <View style={styles.statusBox}>
            <ActivityIndicator size="large" color="#2563EB" />
            <Text style={styles.statusText}>Fetching random user...</Text>
          </View>
        ) : error ? (
          <View style={styles.statusBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : user ? (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onOpenProfile(user)}
              style={styles.avatarWrapper}>
              <Image
                source={{ uri: user.picture.large }}
                style={styles.avatar}
              />
              <Text style={styles.tapBadge}>View Profile</Text>
            </TouchableOpacity>

            <Text style={styles.userName}>{fullName}</Text>
            <Text style={styles.userSub}>@{user.login.username}</Text>
          </>
        ) : null}
      </View>

      <TouchableOpacity
        style={[styles.fetchButton, loading && styles.disabledButton]}
        onPress={onFetchUser}
        disabled={loading}
        activeOpacity={0.85}>
        <Text style={styles.fetchButtonText}>
          {loading ? 'Loading...' : 'Fetch Another User'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  statusBox: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  statusText: {
    marginTop: 12,
    fontSize: 14,
    color: '#4B5563',
  },
  errorText: {
    fontSize: 14,
    color: '#DC2626',
    textAlign: 'center',
    fontWeight: '600',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 14,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#2563EB',
  },
  tapBadge: {
    marginTop: -12,
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: 'hidden',
  },
  userName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  userSub: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  fetchButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  fetchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
