import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { usePathname } from "expo-router"
import PropTypes from "prop-types"
import { AntDesign } from "@expo/vector-icons"

export default function GallerySectionHeader({ image, title }) {
	const [fontsLoaded] = useFonts({
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf")
	})

	const pathname = usePathname()

	return (
		<View style={styles.sectionHeaderContainer}>
			<View style={styles.sectionHeader}>
				<View style={styles.circleSeparator} />
				<Image
					source={image}
					style={styles.headerTitleImage}
					contentFit="contain"
				/>
				<View style={styles.circleSeparator} />
				{fontsLoaded && (
					<Text style={styles.headerTitleText}>{title}</Text>
				)}
				<View style={styles.circleSeparator} />
			</View>
			{pathname === "/create-ads" && (
				<TouchableOpacity style={styles.seeAllButton}>
					{fontsLoaded && (
						<Text style={styles.seeAllButtonText}>See All</Text>
					)}
					<AntDesign name="right" size={10} color="gray" />
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	sectionHeaderContainer: {
		flexDirection: "row",
		height: 35,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between"
	},
	sectionHeader: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6.5
	},
	headerTitleImage: {
		height: 17.5,
		width: 17.5
	},
	headerTitleText: {
		fontSize: 17.5,
		fontFamily: "Genos-Light",
		lineHeight: 20
	},
	circleSeparator: {
		height: 3,
		width: 3,
		borderRadius: 1.5,
		backgroundColor: "gray"
	},
	seeAllButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 3.5
	},
	seeAllButtonText: {
		fontSize: 15,
		fontFamily: "Genos-Light",
		color: "gray",
		lineHeight: 17.5
	}
})

GallerySectionHeader.propTypes = {
	image: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
}
