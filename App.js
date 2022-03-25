import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List Restaurant</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar:  {
    padding: 16,
    backgroundColor: 'green'
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue'
  }
});
