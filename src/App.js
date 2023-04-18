
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <DashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
