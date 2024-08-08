import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { FontAwesome5 } from "@expo/vector-icons"
import PropTypes from "prop-types"

export default function MusicTab({
	id,
	name,
	image,
	artist,
	color,
	selectedSong,
	onPress
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<TouchableOpacity
			style={[
				styles.songItemContainer,
				{
					backgroundColor: color
				}
			]}
			onPress={onPress}
		>
			<View style={styles.songContainer}>
				<Image
					source={image}
					style={styles.songCoverImage}
					contentFit="cover"
				/>
				<View style={styles.songDetailsContainer}>
					{fontsLoaded && (
						<Text style={styles.songNameText}>{name}</Text>
					)}
					<View style={styles.songArtistNameContainer}>
						{fontsLoaded && (
							<Text style={styles.songArtistNameText}>
								{artist}
							</Text>
						)}
						<View style={styles.circleSeparatorLarge} />
					</View>
				</View>
			</View>
			<View style={styles.songIconsContainer}>
				<Image
					source={
						selectedSong?.id === id
							? require("../../assets/icons/playing.svg")
							: require("../../assets/icons/play.svg")
					}
					style={styles.songIcon}
					contentFit="contain"
				/>
				<View
					style={[
						styles.checkbox,
						selectedSong?.id === id
							? styles.checkboxChecked
							: styles.checkboxUnchecked
					]}
				>
					{selectedSong?.id === id && (
						<FontAwesome5 name="check" size={10} color="white" />
					)}
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	songItemContainer: {
		height: 40,
		width: "100%",
		borderWidth: 0.5,
		borderRadius: 7.5,
		borderColor: "lightgrey",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 5
	},
	songContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 7.5
	},
	songCoverImage: {
		height: 30,
		width: 30,
		borderRadius: 5
	},
	songDetailsContainer: {
		flexDirection: "column"
	},
	songNameText: {
		fontSize: 12.5,
		fontFamily: "Genos-Regular",
		lineHeight: 12.5
	},
	songArtistNameContainer: {
		flexDirection: "row",
		gap: 7.5,
		alignItems: "center"
	},
	songArtistNameText: {
		fontSize: 12.5,
		fontFamily: "Genos-Regular",
		lineHeight: 15,
		color: "gray"
	},
	circleSeparatorLarge: {
		height: 4,
		width: 4,
		borderRadius: 2,
		backgroundColor: "gray"
	},
	songIconsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 35,
		marginRight: 10
	},
	songIcon: {
		height: 20,
		width: 20
	},
	checkbox: {
		height: 20,
		width: 20,
		borderRadius: 10
	},
	checkboxChecked: {
		backgroundColor: "#5F9CE3",
		alignItems: "center",
		justifyContent: "center"
	},
	checkboxUnchecked: {
		borderWidth: 1,
		borderColor: "lightgrey"
	}
})

MusicTab.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.node.isRequired,
	artist: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	selectedSong: PropTypes.object,
	onPress: PropTypes.func.isRequired
}
