import { Tabs, useRouter } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color = '#000', size = 24 }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Create Note (Floating Button) */}
      <Tabs.Screen
        name="createnote"
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => router.push('/createnote')}
            >
              <Feather name="plus" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* My Notes Screen */}
      <Tabs.Screen
        name="mynotes"
        options={{
          tabBarIcon: ({ color = '#000', size = 24 }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#AED6F1',
    width: '100%',
    height: 70,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    alignSelf: 'center',
    elevation: 5,
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#1B4F72',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 8,
    bottom: 10,
  },
});
