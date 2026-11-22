import { StyleSheet, Text, View, Modal, Image, ScrollView, Button } from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      transparent={false}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}>
            <Text style={styles.bodyText}>
              Lorem ipsum dolor sit amet. Ut quia vero eum odit Quis aut
              distinctio optio At galisum incidunt sed voluptatem tempore et
              repellat soluta quo suscipit molestias. Sed maiores molestiae ut
              quasi inventore sit eligendi quia ea consequatur quisquam? Nam
              eius ullam qui enim cupiditate aut sint eaque non vitae dolorem et
              asperiores perspiciatis. Ut nihil officia ea repellendus quos sit
              quia officia At galisum unde hic veritatis nesciunt ut dolorem
              aspernatur ab exercitationem praesentium. In explicabo voluptate
              non amet omnis id expedita error quo molestiae modi aut aliquid
              velit? Est aperiam adipisci quo eaque dolorum a alias deserunt? Et
              alias quisquam eum cupiditate numquam et mollitia exercitationem.
              Ea iure obcaecati et delectus tempore ut galisum possimus.
            </Text>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button title="Close" onPress={onClose} color="#FF3B30" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  scrollView: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E1E8ED',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
