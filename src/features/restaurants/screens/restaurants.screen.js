import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurant-info.component';

export const RestarantScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
            <Searchbar />
        </View>
        <View style={styles.list}>
            <RestaurantInfoCard />
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    searchBar: {
        padding: 16,
        backgroundColor: '#6cb221',
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: '#7cce23',
    },
});