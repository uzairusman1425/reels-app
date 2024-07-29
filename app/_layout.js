import { View, StatusBar, Platform, StyleSheet } from "react-native"
import { Stack } from "expo-router"

export default function Layout() {
	return (
		<View style={styles.container}>
			<Stack screenOptions={{ headerShown: false }} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar?.currentHeight : 35
	}
})
