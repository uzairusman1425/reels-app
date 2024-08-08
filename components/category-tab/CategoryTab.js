import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function CategoryTab({ color, title, image, onPress }) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<TouchableOpacity
			style={[
				styles.tabContainer,
				{
					backgroundColor: color
				}
			]}
			onPress={onPress}
		>
			<Image source={image} style={styles.tabIcon} contentFit="contain" />
			{fontsLoaded && <Text style={styles.tabText}>{title}</Text>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	tabContainer: {
		height: 25,
		borderRadius: 3.5,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 7.5,
		gap: 7.5
	},
	tabIcon: {
		height: 16.5,
		width: 16.5
	},
	tabText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		color: "#1C274C",
		lineHeight: 17.5
	}
})

CategoryTab.propTypes = {
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.node.isRequired,
	onPress: PropTypes.func.isRequired
}
