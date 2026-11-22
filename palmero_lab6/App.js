import { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      key: 1,
      title: 'Headphones',
      description:
        'Lorem Ipsum.',
      rating: 4.8,
    },
    {
      key: 2,
      title: 'Mechanical Keyboard',
      description:
        'Lorem Ipsum.',
      rating: 4.6,
    },
    {
      key: 3,
      title: 'Smart Watch',
      description:
        'Lorem Ipsum.',
      rating: 4.5,
    },
    {
      key: 4,
      title: 'Portable USB',
      description:
        'Lorem Ipsum.',
      rating: 4.7,
    },
    {
      key: 5,
      title: 'Wireless Mouse',
      description:
        'Lorem Ipsum.',
      rating: 4.4,
    },
  ];

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentScreen('Product');
  };

  const handleBackToHome = () => {
    setCurrentScreen('Home');
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {currentScreen === 'Home' ? (
        <HomeScreen products={products} onSelectProduct={handleSelectProduct} />
      ) : (
        <ProductScreen product={selectedProduct} onBack={handleBackToHome} />
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
