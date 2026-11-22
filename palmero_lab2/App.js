import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Name:
      </Text>
      <Text style={styles.info}>
        John Joedalry Palmero
      </Text>
      <Text style={styles.paragraph}>
        Age:
      </Text>
      <Text style={styles.info}>
        20
      </Text>
      <Text style={styles.paragraph}>
        Course/Year/Section
      </Text>
      <Text style={styles.info}>
        BS Computer Science, 3rd Year, Section 5
      </Text>
      <Text style={styles.paragraph}>
        About Me:
      </Text>
      <Text style={styles.info}>
        Passionate about technology and software evelopment
      </Text>
      <Text style={styles.paragraph}>
        Achievements:
      </Text>
      <Text style={styles.info}>
        - To be filled :D
      </Text>
      <Text style={styles.paragraph}>
        Skills
      </Text>
      <Text style={styles.info}>
        - Java
      </Text>
      <Text style={styles.info}>
        - JavaScript
      </Text><Text style={styles.info}>
        - React
      </Text>
      <Text style={styles.info}>
        - Web Development
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDBBB',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 8,
    fontSize: 16,
  }
});
