import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../src/theme';
import { Platform } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingTop: 6,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name=\"index\"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color, size }) => <Ionicons name=\"home\" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name=\"children\"
        options={{
          title: 'أطفالي',
          tabBarIcon: ({ color, size }) => <Ionicons name=\"people\" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name=\"reports\"
        options={{
          title: 'التقارير',
          tabBarIcon: ({ color, size }) => <Ionicons name=\"bar-chart\" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name=\"profile\"
        options={{
          title: 'حسابي',
          tabBarIcon: ({ color, size }) => <Ionicons name=\"person\" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
