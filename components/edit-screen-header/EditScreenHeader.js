import { TouchableOpacity, View, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { Image } from "expo-image"
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
					<Image
						source={require("../../assets/icons/undo.svg")}
						style={styles.headerActionButtonIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.headerActionButton}>
					<Image
						source={require("../../assets/icons/redo.svg")}
						style={styles.headerActionButtonIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.headerActionButton}
				onPress={() => {
					router?.navigate("/preview")
				}}
			>
				<Image
					source={require("../../assets/icons/preview.svg")}
					style={styles.headerActionButtonIcon}
					contentFit="contain"
				/>
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
	headerActionButtonIcon: {
		height: 22.5,
		width: 22.5
	},
	resetButtonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 25
	}
})
