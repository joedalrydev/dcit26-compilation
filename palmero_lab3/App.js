import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { text: inputText }]);

    setInputText('');
  };

  return (
    <View style={styles.content}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Item"
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={setInputText}
        />
        <View style={styles.button}>
          <Button title="ADD" onPress={addItem} color="#007AFF" />
        </View>
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E8ED',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    elevation: 2,
  },
  button: {
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E1E8ED',
  },
  listText: {
    fontSize: 16,
    color: '#2C3E50',
    flex: 1,
  },
});
