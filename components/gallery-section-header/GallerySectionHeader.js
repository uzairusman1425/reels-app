import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { usePathname } from "expo-router"
import PropTypes from "prop-types"
import { AntDesign } from "@expo/vector-icons"

export default function GallerySectionHeader({ image, title }) {
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
				<Text style={styles.headerTitleText}>{title}</Text>
				<View style={styles.circleSeparator} />
			</View>
			{pathname === "/create-ads" && (
				<TouchableOpacity style={styles.seeAllButton}>
					<Text style={styles.seeAllButtonText}>See All</Text>
					<AntDesign name="right" size={12.5} color="gray" />
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
		fontSize: 15
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
		fontSize: 12.5,
		color: "gray"
	}
})

GallerySectionHeader.propTypes = {
	image: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
}
