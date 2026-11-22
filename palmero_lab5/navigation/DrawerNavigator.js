import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2563EB',
        drawerLabelStyle: { fontSize: 15, fontWeight: '600' },
      }}
    >
      <Drawer.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutTab"
        component={AboutStack}
        options={{
          title: 'About',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}