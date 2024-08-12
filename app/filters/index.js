import {
	View,
	ImageBackground,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { Image } from "expo-image"
import { useRouter } from "expo-router"

export default function Page() {
	const router = useRouter()

	return (
		<ImageBackground
			source={require("../../assets/images/bg-image.png")}
			style={styles.container}
		>
			<View style={styles.actionButtonsContainer}>
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
				<TouchableOpacity style={styles.arrowButton}>
					<Image
						source={require("../../assets/icons/right-arrow.svg")}
						style={styles.arrowIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.filtersSection}>
				<TouchableOpacity style={styles.filterButtonExtraSmall} />
				<TouchableOpacity style={styles.filterButtonSmall} />
				<TouchableOpacity style={styles.filterButtonMedium} />
				<TouchableOpacity style={styles.filterButtonLarge} />
				<TouchableOpacity style={styles.filterButtonMedium} />
				<TouchableOpacity style={styles.filterButtonSmall} />
				<TouchableOpacity style={styles.filterButtonExtraSmall} />
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 35
	},
	actionButtonsContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 15
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
	},
	filtersSection: {
		width: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-evenly"
	},
	filterButtonLarge: {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderWidth: 5,
		borderColor: "gray",
		backgroundColor: "white"
	},
	filterButtonMedium: {
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "white"
	},
	filterButtonSmall: {
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: "white"
	},
	filterButtonExtraSmall: {
		height: 25,
		width: 25,
		borderRadius: 12.5,
		backgroundColor: "white"
	}
})
