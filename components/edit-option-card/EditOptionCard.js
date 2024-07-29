import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function EditOptionCard({ image, title }) {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf")
	})

	return (
		<TouchableOpacity style={styles.editOptionCard}>
			<Image source={image} style={styles.editOptionIcon} />
			{fontsLoaded && <Text style={styles.editOptionText}>{title}</Text>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	editOptionCard: {
		height: 65,
		width: 65,
		borderRadius: 10,
		backgroundColor: "gray",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 5
	},
	editOptionIcon: {
		height: 25,
		width: 25
	},
	editOptionText: {
		fontSize: 15,
		fontFamily: "Genos-Medium",
		color: "white"
	}
})

EditOptionCard.propTypes = {
	image: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
}
