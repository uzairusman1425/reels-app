import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { useRouter } from "expo-router"
import PropTypes from "prop-types"

export default function CreateContentCard({
	image,
	salutation,
	title,
	description,
	href
}) {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf")
	})

	return (
		<TouchableOpacity
			style={styles.createCard}
			onPress={() => {
				router?.navigate(href)
			}}
		>
			<Image
				source={image}
				style={styles.createCardIconImage}
				contentFit="contain"
			/>
			{fontsLoaded && (
				<Text style={styles.createCardSalutationText}>
					{salutation}
				</Text>
			)}
			{fontsLoaded && (
				<Text style={styles.createCardTitleText}>{title}</Text>
			)}
			{fontsLoaded && (
				<Text style={styles.createCardDescriptionText}>
					{description}
				</Text>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	createCard: {
		height: 115,
		width: "32%",
		borderRadius: 7.5,
		backgroundColor: "rgba(255, 255, 255, 0.75)",
		paddingHorizontal: 5,
		paddingVertical: 10,
		flexDirection: "column",
		justifyContent: "space-between"
	},
	createCardIconImage: {
		height: 40,
		width: 40,
		alignSelf: "center"
	},
	createCardSalutationText: {
		fontSize: 12.5,
		fontFamily: "Genos-Light",
		color: "#1C274C",
		marginTop: 10
	},
	createCardTitleText: {
		fontSize: 13.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C"
	},
	createCardDescriptionText: {
		fontSize: 10.5,
		fontFamily: "Genos-Light",
		color: "#1C274C"
	}
})

CreateContentCard.propTypes = {
	image: PropTypes.node.isRequired,
	salutation: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired
}
