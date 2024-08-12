import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useRouter } from "expo-router"

export default function PreviewAdScreenFooter() {
	const router = useRouter()

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.arrowButton}
				onPress={() => {
					router?.back()
				}}
			>
				<Image
					source={require("../../assets/icons/left-arrow.svg")}
					style={styles.arrowIcon}
					contentFit="contain"
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.arrowButton}
				onPress={() => {
					router?.navigate("/select-region")
				}}
			>
				<Image
					source={require("../../assets/icons/right-arrow.svg")}
					style={styles.arrowIcon}
					contentFit="contain"
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.85)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: 15,
		paddingHorizontal: 15,
		paddingBottom: 25
	},
	arrowButton: {
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center"
	},
	arrowIcon: {
		height: 25,
		width: 25
	}
})
