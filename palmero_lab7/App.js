import { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const API_URL = 'https://randomuser.me/api';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const fetchedUser = data.results?.[0] || null;
      setUser(fetchedUser);
    } catch (err) {
      setError('Could not load user data. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomUser();
  }, [fetchRandomUser]);

  const handleOpenProfile = (selectedUser) => {
    setUser(selectedUser);
    setCurrentScreen('Profile');
  };

  const handleBackToHome = () => {
    setCurrentScreen('Home');
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {currentScreen === 'Home' ? (
        <HomeScreen
          user={user}
          loading={loading}
          error={error}
          onFetchUser={fetchRandomUser}
          onOpenProfile={handleOpenProfile}
        />
      ) : (
        <ProfileScreen user={user} onBack={handleBackToHome} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
});