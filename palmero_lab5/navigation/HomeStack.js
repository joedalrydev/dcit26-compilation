import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2563EB' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 12 }}
            >
              <Ionicons name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}