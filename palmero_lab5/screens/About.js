import { View, StyleSheet } from 'react-native';
import ScreenCard from '../components/ScreenCard';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenCard
        title="About Screen"
        iconName="information-circle"
        buttons={[
          {
            label: 'Go Back',
            onPress: () => navigation.navigate('HomeTab'),
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