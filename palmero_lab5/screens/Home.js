import { View, StyleSheet } from 'react-native';
import ScreenCard from '../components/ScreenCard';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenCard
        title="Home"
        iconName="home"
        buttons={[
          {
            label: 'Profile',
            onPress: () => navigation.navigate('Profile'),
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
