import {
	TouchableOpacity,
	ImageBackground,
	Text,
	StyleSheet
} from "react-native"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function AdsOptionsCard({ image, title, description }) {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf")
	})

	return (
		<TouchableOpacity style={styles.adsOptionsCard}>
			<ImageBackground
				source={image}
				style={styles.adsOptionCardBackgroundImage}
				resizeMode="cover"
			>
				{fontsLoaded && (
					<Text style={styles.adsOptionsCardTitleText}>{title}</Text>
				)}
				{fontsLoaded && (
					<Text style={styles.adsOptionsCardDescriptionText}>
						{description}
					</Text>
				)}
			</ImageBackground>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	adsOptionsCard: {
		width: "23.5%"
	},
	adsOptionCardBackgroundImage: {
		height: 100,
		width: "100%",
		borderRadius: 7.5,
		paddingVertical: 5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-end",
		overflow: "hidden"
	},
	adsOptionsCardTitleText: {
		fontSize: 15,
		fontFamily: "Genos-Medium",
		color: "#1C274C"
	},
	adsOptionsCardDescriptionText: {
		fontSize: 13.5,
		fontFamily: "Genos-Light",
		color: "#1C274C"
	}
})

AdsOptionsCard.propTypes = {
	image: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}
