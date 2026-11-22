import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import AboutScreen from '../screens/About';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2563EB' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
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
    </Stack.Navigator>
  );
}