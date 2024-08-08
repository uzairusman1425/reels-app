import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function TextAlignmentCard({ color, image, title, onPress }) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<TouchableOpacity
			style={[
				styles.textAlignmentOptionCard,
				{
					backgroundColor: color
				}
			]}
			onPress={onPress}
		>
			<Image
				source={image}
				style={styles.textAlignmentIcon}
				contentFit="contain"
			/>
			{fontsLoaded && (
				<Text style={styles.textAlignmentTitleText}>{title}</Text>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	textAlignmentOptionCard: {
		height: 85,
		width: "21.5%",
		borderRadius: 7.5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	textAlignmentIcon: {
		height: 40,
		width: 40
	},
	textAlignmentTitleText: {
		fontSize: 13.5,
		color: "#1C274C",
		fontFamily: "Genos-Regular"
	}
})

TextAlignmentCard.propTypes = {
	color: PropTypes.string.isRequired,
	image: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}
