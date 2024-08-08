import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { FlashList } from "@shopify/flash-list"

export default function ModalFontSection() {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.fontSection}>
			<FlashList
				data={new Array(8).fill("Fonts")}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.fontTab}>
						{fontsLoaded && (
							<Text style={styles.fontTabText}>{item}</Text>
						)}
					</TouchableOpacity>
				)}
				estimatedItemSize={50}
				numColumns={4}
				ItemSeparatorComponent={() => (
					<View style={styles.itemSeparator} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	fontSection: {
		flex: 1,
		width: "100%",
		padding: 15
	},
	fontTab: {
		height: 25,
		width: "90%",
		backgroundColor: "lightgrey",
		borderRadius: 5,
		marginHorizontal: "auto",
		alignItems: "center",
		justifyContent: "center"
	},
	fontTabText: {
		fontSize: 15,
		color: "white",
		fontFamily: "Genos-Regular",
		lineHeight: 17.5
	},
	itemSeparator: {
		height: 10
	}
})
