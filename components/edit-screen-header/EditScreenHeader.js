import { TouchableOpacity, View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { Fontisto, Feather } from "@expo/vector-icons"
import BackButton from "../back-button/BackButton"

export default function EditScreenHeader() {
	const router = useRouter()

	return (
		<LinearGradient
			style={styles.headerContainer}
			colors={["rgba(0,0,0,1)", "rgba(0,0,0,0.85)"]}
		>
			<BackButton />
			<View style={styles.resetButtonsContainer}>
				<TouchableOpacity style={styles.headerActionButton}>
					<Fontisto
						name="arrow-return-left"
						size={22.5}
						color="#1C274C"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.headerActionButton}>
					<Fontisto
						name="arrow-return-right"
						size={22.5}
						color="#1C274C"
					/>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.headerActionButton}
				onPress={() => {
					router?.navigate("/preview")
				}}
			>
				<Feather name="eye" size={22.5} color="#1C274C" />
			</TouchableOpacity>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 55,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20
	},
	headerActionButton: {
		height: 37.5,
		width: 37.5,
		borderRadius: 20,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center"
	},
	resetButtonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 25
	}
})
