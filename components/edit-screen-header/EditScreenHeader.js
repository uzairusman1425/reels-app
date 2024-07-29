import { TouchableOpacity, View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome5, Fontisto, Feather } from "@expo/vector-icons"

export default function EditScreenHeader() {
	const router = useRouter()

	return (
		<LinearGradient
			style={styles.headerContainer}
			colors={["rgba(0,0,0,1)", "rgba(0,0,0,0.85)"]}
		>
			<TouchableOpacity
				style={styles.headerActionButton}
				onPress={() => {
					router?.back()
				}}
			>
				<FontAwesome5 name="chevron-left" size={22.5} color="#1C274C" />
			</TouchableOpacity>
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
			<TouchableOpacity style={styles.headerActionButton}>
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
