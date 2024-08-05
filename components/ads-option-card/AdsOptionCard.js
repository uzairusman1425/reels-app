import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function AdsOptionCard({ image, title, description }) {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf")
	})

	return (
		<TouchableOpacity style={styles.adsOptionsCard}>
			<Image source={image} style={styles.adsOptionsCardIconImage} />
			{fontsLoaded && (
				<Text style={styles.adsOptionsCardTitleText}>{title}</Text>
			)}
			{fontsLoaded && (
				<Text style={styles.adsOptionsCardDescriptionText}>
					{description}
				</Text>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	adsOptionsCard: {
		height: 90,
		width: "23.5%",
		borderRadius: 7.5,
		backgroundColor: "rgba(255, 255, 255, 0.75)",
		paddingVertical: 7.5,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	adsOptionsCardIconImage: {
		height: 40,
		width: 40,
		alignSelf: "center"
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

AdsOptionCard.propTypes = {
	image: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}
