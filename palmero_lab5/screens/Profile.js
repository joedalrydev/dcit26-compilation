import { View, StyleSheet } from 'react-native';
import ScreenCard from '../components/ScreenCard';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenCard
        title="Profile"
        iconName="person-circle"
        buttons={[
          {
            label: 'Go Back Home',
            onPress: () => navigation.goBack(),
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