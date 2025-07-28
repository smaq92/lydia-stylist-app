// This contains shared UI elements such as headers and tab bars so they are consistent between different routes

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#FD7A02"
    }}>
      <Tabs.Screen name="index" options={{ 
        title: 'Home',
        tabBarIcon: ({color,focused}) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>
        ),
       }} />
      <Tabs.Screen name="browseOutfits" options={{ title: 'Browse Outfits',
        tabBarIcon: ({color,focused}) => (
          <Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24}/>
        ),
       }} />
      <Tabs.Screen name="wardrobe" options={{ title: 'Wardrobe',
        tabBarIcon: ({color,focused}) => (
          <Ionicons name={focused ? 'shirt-sharp' : 'shirt-outline'} color={color} size={24}/>),
       }} />
      <Tabs.Screen name="profile" options={{ 
        title: 'Profile',
        tabBarIcon: ({color,focused}) => (
          <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24}/>),
        }} />
    </Tabs>
  );
}

// A stack navigator is the foundation for navigating between different screens in an app. On Android, a stacked route animates on top of the current screen. On iOS, a stacked route animates from the right. Expo Router provides a Stack component to create a navigation stack to add new routes.
