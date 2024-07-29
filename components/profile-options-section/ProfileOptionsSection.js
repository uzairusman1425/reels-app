import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { Ionicons } from "@expo/vector-icons"

export default function ProfileOptionsSection() {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf")
	})

	return (
		<View style={styles.profileOptionsSection}>
			<View style={styles.profileInfoContainer}>
				<TouchableOpacity
					onPress={() => {
						// router?.navigate("/camera")
					}}
				>
					<Image
						source={require("../../assets/images/profile2.png")}
						style={styles.profileImage}
						contentFit="cover"
					/>
				</TouchableOpacity>
				<View style={styles.profileDetailsContainer}>
					{fontsLoaded && (
						<Text style={styles.profileDetailsText}>Halloo !!</Text>
					)}
					{fontsLoaded && (
						<Text style={styles.profileDetailsText}>Username</Text>
					)}
				</View>
			</View>
			<TouchableOpacity style={styles.settingsButton}>
				<Ionicons name="settings-outline" size={27.5} color="white" />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	profileOptionsSection: {
		width: "95%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	profileInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	profileImage: {
		height: 50,
		width: 50,
		borderRadius: 25,
		overflow: "hidden"
	},
	profileDetailsContainer: {
		flexDirection: "column"
	},
	profileDetailsText: {
		fontSize: 17.5,
		color: "white",
		fontFamily: "Genos-Medium"
	},
	settingsButton: {
		height: 40,
		width: 40,
		borderRadius: 10,
		backgroundColor: "rgba(125, 125, 125, 0.75)",
		alignItems: "center",
		justifyContent: "center"
	}
})
