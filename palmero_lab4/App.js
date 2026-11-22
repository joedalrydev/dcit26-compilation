import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Click Me" 
            onPress={() => setModalVisible(true)} 
            color="#007AFF" 
          />
        </View>
      </View>

      <SampleModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  buttonWrapper: {
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});