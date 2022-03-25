import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
 
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
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
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