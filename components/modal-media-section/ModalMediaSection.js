import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import * as ImagePicker from "expo-image-picker"
import { AntDesign } from "@expo/vector-icons"
import PropTypes from "prop-types"

export default function ModalMediaSection({ setImage }) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const pickImage = async () => {
		let result = await ImagePicker?.launchImageLibraryAsync({
			mediaTypes: ImagePicker?.MediaTypeOptions?.All,
			quality: 1
		})

		if (!result.canceled) {
			setImage(result?.assets[0])
		}
	}

	return (
		<View style={styles.mediaSection}>
			<Image
				source={require("../../assets/images/edit-media-bg.png")}
				style={styles.mediaBackgroundImage}
				contentFit="contain"
			/>
			<TouchableOpacity
				style={styles.allowAccessButton}
				onPress={pickImage}
			>
				<AntDesign name="check" size={22.5} color="white" />
				{fontsLoaded && (
					<Text style={styles.allowAccessButtonText}>
						Allow access
					</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	mediaSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 25
	},
	mediaBackgroundImage: {
		height: 200,
		width: "100%"
	},
	allowAccessButton: {
		height: 45,
		width: 160,
		borderRadius: 12.5,
		backgroundColor: "rgba(27, 196, 105, 0.9)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5
	},
	allowAccessButtonText: {
		fontSize: 20,
		fontWeight: "600",
		color: "white",
		fontFamily: "Genos-Regular",
		lineHeight: 22.5
	}
})

ModalMediaSection.propTypes = {
	setImage: PropTypes.func.isRequired
}
