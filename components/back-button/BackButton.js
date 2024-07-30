import { TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { FontAwesome5 } from "@expo/vector-icons"

export default function BackButton() {
	const router = useRouter()

	return (
		<TouchableOpacity
			style={styles.buttonContainer}
			onPress={() => {
				router?.back()
			}}
		>
			<FontAwesome5 name="chevron-left" size={22.5} color="#1C274C" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 37.5,
		width: 37.5,
		borderRadius: 20,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center"
	}
})
